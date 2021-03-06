import axios from "../utils/axiosConfig";

// All request related APIs

export async function getRequestById(shortId) {
  let responseFromApi;
  try {
    responseFromApi = await axios.get(`/requests/${shortId}`);
  } catch (err) {
    console.error(err);
  }

  return responseFromApi;
}

export async function getAllRequests() {
  let response;
  try {
    let allRequests = await axios.get("/requests/");
    response = allRequests;
  } catch (err) {
    console.error(err);
  }

  return response;
}

export async function createRequest(title, content, type, eth_address, files) {
  let responseFromApi;
  try {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("type", type);
    formData.append("eth_address", eth_address);
    formData.append("files", files);
    responseFromApi = await axios.post("/requests/create", formData);
  } catch (err) {
    console.error(err);
  }

  return responseFromApi;
}

export async function upvotePost(shortId) {
  let responseFromApi;
  try {
    responseFromApi = await axios.post("/requests/upvote/" + shortId);
  } catch (err) {
    console.error(err);
  }

  return responseFromApi;
}

export async function downvotePost(shortId) {
  let responseFromApi;
  try {
    responseFromApi = await axios.post("/requests/downvote/" + shortId);
  } catch (err) {
    console.error(err);
  }

  return responseFromApi;
}

// All chat related APIs

export async function initiateChat(reciever) {
  let responseFromApi;
  try {
    let formData = new FormData();
    formData.append("reciever", reciever);    
    responseFromApi = await axios.post("/chat/initiate", formData);
  } catch (err) {
    console.error(err);
  }

  return responseFromApi;
}

// All comments related APIs

export async function addComment(content, postId) {
  let responseFromApi;
  try {
    let formData = new FormData();
    formData.append("content", content);
    responseFromApi = await axios.post("/comment/post/" + postId, formData);
  } catch (err) {
    console.error(err);
  }

  return responseFromApi;
}

export async function getAllComments(postId) {
  let responseFromApi;
  try {
    responseFromApi = await axios.get("/comment/all/" + postId);
  } catch (err) {
    console.error(err);
  }

  return responseFromApi.data.comments;
}
