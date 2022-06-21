import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  background-color: #c8d8e4;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #2b3e51;
}

h2 {
  font-weight: 300;
  text-align: center;
}

a,
a:link,
a:visited,
a:active {
  color: #3ca9e2;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
a:focus, a:hover,
a:link:focus,
a:link:hover,
a:visited:focus,
a:visited:hover,
a:active:focus,
a:active:hover {
  color: #329dd5;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

#create-account-wrap {
  background-color: #eeedf1;
  color: #8a8b8e;
  font-size: 14px;
  width: 100%;
  padding: 10px 0;
  border-radius: 0 0 4px 4px;
}

  .alert {
    border-width: 0;
    font-size: 12px;
    padding: 14px 14px 12px 14px;
    font-weight: 400;
}


.alert-danger {
    background-color: #EB1E32;
    border-color: #EB1E32;
    color: #FFF;
}

.alert {
    padding: 14px;
    margin-bottom: 24px;
    border: 1px solid transparent;
}

.text-danger {
    color: #dc3545 !important;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    
}

.ant-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
   
`;
