
export const login = user => {
  console.log(user);
  return $.ajax({
    method: 'POST',
    url: 'api/session/',
    data: user
  })
};

export const signup = user => {
  console.log(user);
  return $.ajax({
    method: 'POST',
    url: 'api/users/',
    data: user
  })
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session/'
  })
);

export const deleteAccount = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${id}`
  })
);
