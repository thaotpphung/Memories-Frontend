import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <div class="body-container col-11 col-md-10 col-lg-9 col-centered text-center">
    <div class="row">
      <% if(!currentUser){ %>
      <div id="intro-left" class="col 10 col-lg-6">
        <div id="landing-banner">
          <span id="logo">STOCKOVERFLOW</span> provides good service with no
          fees. A powerful tool to track and visualize stock data.
        </div>
        <div id="signup-form">

          <form action="/register" method="POST">
            <div class="form-row">
              <div class="col-6">
                <input type="text" class="form-control" name="username" placeholder="Username" />
              </div>
              <div class="col-6">
                <input type="email" class="form-control" name="email" placeholder="Email" />
              </div>

              <div class="col-md-6">
                <input type="text" class="form-control" name="firstname" placeholder="First name" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" name="lastname" placeholder="Last name" />
              </div>

              <div class="col-md-6">
                <div class="row">
                  <div class="col-12">
                    <input type="password" class="form-control" name="password"
                      placeholder="Password" />
                  </div>
                  <div class="col-12">
                    <input type="password" class="form-control" name="confirm"
                      placeholder="Confirm Password" />
                  </div>
                </div>
              </div>

              <div id="password-warning" class="col-md-6">
                Password must contain:
                <ul>
                  <li>At least 8 characters</li>
                  <li>Numeric characters</li>
                  <li>Alphabetical characters</li>
                  <li>Special characters</li>
                </ul>
              </div>

              <div class="button-container">
                <button class="btn green-button">Join Now</button>
              </div>
            </div>
          </form>

        </div>
      </div>
      <div id="intro-right" class="col-12 col-lg-6 d-none d-md-block pb-5 pb-lg-0">
        <div id="stock-image"></div>
      </div>

      <% } else { %>
     
      <div id="landing-banner" class="col-11 col-centered col-md-6 py-5">
        <div>Welcome back to</div>
        <span id="logo">STOCKOVERFLOW</span> <%= currentUser.firstname %>!
        <div>How are you today?</div>
      </div>

      <div class="col-11 col-centered col-md-6">
        <h1 class="header-black">
          MOST GAINER
          <span class="float-right font-size-xsm"></span>
        </h1>
        <div class="stat-table">
          <table class="table table-striped mb-0">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Change (%)</th>
                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>

              <% stockmarket.mostgainer.forEach(stock => { %>
              <tr>
                <td><%=stock.symbol%></td>

                <% if (stock.changesPercentage < 0) { %>
                <td class="negative">
                  <% } else { %>
                <td class="positive">
                  <% } %>
                  <%=stock.changesPercentage%>
                </td>

                <td><%=stock.price%></td>

              </tr>
              <% }); %>
            </tbody>
          </table>
        </div>
      </div>


      <div class="col-11 col-centered col-md-6">
        <h1 class="header-black">
          MOST ACTIVE
          <span class="float-right font-size-xsm"></span>
        </h1>
        <div class="stat-table">
          <table class="table table-striped mb-0">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Change (%)</th>
                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>

              <% stockmarket.mostactive.forEach(stock => { %>
              <tr>
                <td><%=stock.symbol%></td>

                <% if (stock.changesPercentage < 0) { %>
                <td class="negative">
                  <% } else { %>
                <td class="positive">
                  <% } %>
                  <%=stock.changesPercentage%>
                </td>

                <td><%=stock.price%></td>

              </tr>
              <% }); %>
            </tbody>
          </table>
        </div>
      </div>


      <div class="col-11 col-centered col-md-6">
        <h1 class="header-black">
          MOST LOSER
          <span class="float-right font-size-xsm"></span>
        </h1>
        <div class="stat-table">
          <table class="table table-striped mb-0">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Change (%)</th>
                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>
              <% stockmarket.mostloser.forEach(stock => { %>
              <tr>
                <td><%=stock.symbol%></td>
                <% if (stock.changesPercentage < 0) { %>
                <td class="negative">
                  <% } else { %>
                <td class="positive">
                  <% } %>
                  <%=stock.changesPercentage%>
                </td>
                <td><%=stock.price%></td>
              </tr>
              <% }); %>
            </tbody>
          </table>
        </div>
      </div>

      <% } %>
    </div>
  </div>

    </div>
  );
}

export default App;
