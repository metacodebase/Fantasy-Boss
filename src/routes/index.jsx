import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from '../Layouts/AuthLayout'
import Signup from '../pages/Auth/Signup'
import Forgotpassword from '../pages/Auth/Forgotpassword'
import Verification from '../pages/Auth/Verification'
import SplashScreen from '../pages/Auth/SplashScreen'
import DashboardLayout from '../Layouts/DashboardLayout'
import Login from '../pages/Auth/Login'
import Home from '../pages/Dashboard/Home'
import FindLeague from '../pages/FindLeague'
import League from '../pages/Dashboard/League'
import Matchup from '../pages/Dashboard/Matchup'
import LeagueCommissioner from '../pages/Dashboard/LeagueCommissioner'
import LeagueCommissionerSecond from '../pages/Dashboard/LeagueCommissionerSecond'
import LeagueDraftSetting from '../pages/Dashboard/LeagueDraftSetting'
import LeagueDraftSettingSecond from '../pages/Dashboard/LeagueDraftSettingSecond'
import LeagueDraftSettingThird from '../pages/Dashboard/LeagueDraftSettingThird'
import LeagueFees from '../pages/Dashboard/LeagueFees'
import LeaguePrice from '../pages/Dashboard/LeaguePrice'
import SidePool from '../pages/Dashboard/SidePool'
import PositionLimits from '../pages/Dashboard/PositionLimits'
import PositionLimitsSecond from '../pages/Dashboard/PositionLimitsSecond'
import LeagueCreate from '../pages/Dashboard/LeagueCreate'
import LeagueTieBeakers from '../pages/Dashboard/LeagueTieBeakers'
import Divisions from '../pages/Dashboard/Divisions'
import TradingPlayoff from '../pages/Dashboard/TradingPlayoff'
import KeeperSettings from '../pages/Dashboard/KeeperSettings'
import PlayerWatch from '../pages/Dashboard/PlayerWatchlist/PlayerWatch'
import PlayerListView from '../pages/Dashboard/PlayerWatchlist/PlayerListView'
import PlayerListViewSecond from '../pages/Dashboard/PlayerWatchlist/PlayerListViewSecond'
import DraftWatchlist from '../pages/Dashboard/PlayerWatchlist/DraftWatchlist'
import DraftTeams from '../pages/Dashboard/PlayerWatchlist/DraftTeams'
import TradeZone from '../pages/Dashboard/TradeZone/TradeZone'
import DraftTradeZone from '../pages/Dashboard/TradeZone/DraftTradeZone'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes with Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot-password" element={<Forgotpassword />} />
          <Route path="/auth/verification" element={<Verification />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/league" element={<League />} />
          <Route path="/matchups" element={<Matchup />} />
          <Route path="/players" element={<PlayerWatch />} />
          <Route path="/player-list-view" element={<PlayerListView />} />
          <Route path="/player-list-view-second" element={<PlayerListViewSecond />} />
          <Route path="/draft-watchlist" element={<DraftWatchlist />} />
          <Route path="/draft-teams" element={<DraftTeams />} />
          <Route path="/trade" element={<TradeZone />} />
          <Route path="/draft-trade" element={<DraftTradeZone />} />


          <Route path="/league-commissioner" element={<LeagueCommissioner />} />
          <Route path="/league-commissioner-second" element={<LeagueCommissionerSecond />} />
          <Route path="/league-draft-setting" element={<LeagueDraftSetting />} />
          <Route path="/league-draft-setting-second" element={<LeagueDraftSettingSecond />} />
          <Route path="/league-draft-setting-third" element={<LeagueDraftSettingThird />} />
          <Route path="/league-fees" element={<LeagueFees />} />
          <Route path="/league-price" element={<LeaguePrice />} />
          <Route path="/side-pool" element={<SidePool />} />
          <Route path="/position-limits" element={<PositionLimits />} />
          <Route path="/position-limits-second" element={<PositionLimitsSecond />} />
          <Route path="/league-create" element={<LeagueCreate />} />
          <Route path="/league-tie-breakers" element={<LeagueTieBeakers />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/trading-playoff" element={<TradingPlayoff />} />
          <Route path="/keeper-settings" element={<KeeperSettings />} />

        </Route>

        <Route>
          <Route path="/find-league" element={<FindLeague />} />
        </Route>

        {/* Default Route - Redirect to Login */}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
