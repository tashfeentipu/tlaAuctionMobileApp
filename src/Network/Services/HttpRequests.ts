const headers: any = {
  Accept: "application/json",
  "Content-Type": "application/json",
};


export const GetAsync = async (baseURL: string, authorization = false) => {

  if (authorization) {
    const accessToken = "";
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const response = await fetch(baseURL, {
    headers: headers,
    method: "GET",
  });
  return response.json();
};

export const PostAsync = async (baseURL: string, body: any, authorization = false) => {

  if (authorization) {
    const accessToken = "";
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  try {
    const response = await fetch(baseURL, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.log("POST", error);
  }
};

export const PutAsync = async (baseURL: string, body: any, authorization = false) => {

  if (authorization) {
    const accessToken = "";
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const response = await fetch(baseURL, {
    headers: headers,
    method: "PUT",
    body: body,
  });
  return response.json();
};

export const DeleteAsync = async (baseURL: string, authorization = false) => {

  if (authorization) {
    const accessToken = "";
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const response = await fetch(baseURL, {
    headers: headers,
    method: "DELETE",
  });
  return response.json();
};
