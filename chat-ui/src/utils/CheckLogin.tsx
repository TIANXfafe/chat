import React from 'react';

const checkLogin = () => {
  const startTime = Number(localStorage.getItem('loginTime'));
  const endTime = new Date().getTime();
  return endTime - startTime <= + 24 * 60 * 60 * 1000;
};

export default checkLogin;