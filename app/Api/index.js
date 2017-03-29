import axios from 'axios';
import { API_URL, userRole, session } from './ApiConstants';
const localStorage = global.window.localStorage;

const realData = {
  getOrderStatsApi(statsDate) {
    const StatsDate = {
      date: statsDate,
      timeZone : 'Asia/Kolkata'
    };
    const GET_ORDER_STATS_API = `${API_URL}/orders/stats`;
    return axios({
      method: 'POST',
      url: GET_ORDER_STATS_API,
      data: StatsDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getPilotStatsApi(statsDate) {
    const StatsDate = {
      team: '*',
    };
    const GET_PILOT_STATS_API = `${API_URL}/pilots/stats`;
    return axios({
      method: 'POST',
      url: GET_PILOT_STATS_API,
      data: StatsDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamsApi() {
    const GET_TEAMS_API = `${API_URL}/teams`;
    return axios({
      method: 'GET',
      url: GET_TEAMS_API,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamSalesApi(salesDate) {
    const GET_TEAM_SALES_API = `${API_URL}/teams/sales`;
    return axios({
      method: 'POST',
      url: GET_TEAM_SALES_API,
      data: salesDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamCustomersApi(salesDate) {
    const GET_TEAM_CUSTOMERS_API = `${API_URL}/customers/sales`;
    return axios({
      method: 'POST',
      url: GET_TEAM_CUSTOMERS_API,
      data: salesDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  postAddTaskApi(data, pickupCord, deliveryCord, dates) {
    console.info(dates.deliverydate());
    const { pickup, delivery, taskInfo, selection } = data;
    const payload = {
      title: taskInfo.title,
      from_name: session.customer.name,
      from_phone: session.customer.user.mobileNumber,
      from_email: session.customer.user.emailAddress,
      from_address: pickup.from_address,
      to_name: delivery.to_name,
      to_phone: delivery.to_phone,
      to_email: delivery.to_email,
      to_address: delivery.to_address,
      paymentType: 'PREPAID',
      status: 'PENDING',
      to_date_time: dates.deliverydate(),
      to_location: {
        coordinates: [deliveryCord.dLng, deliveryCord.dLat],
        type: 'Point',
      },
      from_date_time: dates.pickupdate(),
      from_location: {
        coordinates: [session.customer.location.coordinates[0], session.customer.location.coordinates[1]],
        type: 'Point',
      },
      pilot: selection.pilots ? selection.pilots : null,
      team: selection.teamSelect ? selection.teamSelect : null,
      createdByUserRole: Object.keys(userRole())[0].toUpperCase(),
      createdBy: Object.values(userRole())[0],
    };
    const POST_ADD_TASK_API = `${API_URL}/orders`;
    return axios({
      method: 'POST',
      url: POST_ADD_TASK_API,
      data: payload,
      responseType: 'json',
    }).then((response) => response.data);
  },
};

export default realData;
