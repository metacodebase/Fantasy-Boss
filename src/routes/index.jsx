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
import DraftTradeZoneSecond from '../pages/Dashboard/TradeZone/DraftTradeZoneSecond'
import ScoresNews from '../pages/Dashboard/ScoresNews/ScoresNews'
import ScoresDraft from '../pages/Dashboard/ScoresNews/ScoresDraft'


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
          <Route path="/dashboard" element={<Home />} />  {/* done */}
          <Route path="/league" element={<League />} /> {/* done */}
          <Route path="/matchups" element={<Matchup />} />  {/* done */}
          <Route path="/players" element={<PlayerWatch />} />  {/* done */}
          <Route path="/player-list-view" element={<PlayerListView />} /> {/* done */}
          <Route path="/player-list-view-second" element={<PlayerListViewSecond />} /> {/* done */}
          <Route path="/draft-watchlist" element={<DraftWatchlist />} /> {/* done */}
          <Route path="/draft-teams" element={<DraftTeams />} />  {/* done */}
          <Route path="/trade" element={<TradeZone />} /> {/* done */}
          <Route path="/draft-trade" element={<DraftTradeZone />} />  {/* done */}
          <Route path="/draft-trade-second" element={<DraftTradeZoneSecond />} />  {/* done */}
          <Route path="/scores" element={<ScoresNews />} /> {/* done */}
          <Route path="/scores-draft" element={<ScoresDraft />} />  {/* done */}


          <Route path="/league-commissioner" element={<LeagueCommissioner />} />  {/* done */}
          <Route path="/league-commissioner-second" element={<LeagueCommissionerSecond />} />   {/* done */}
          <Route path="/league-draft-setting" element={<LeagueDraftSetting />} />   {/* done */}
          <Route path="/league-draft-setting-second" element={<LeagueDraftSettingSecond />} /> {/* done */}
          <Route path="/league-draft-setting-third" element={<LeagueDraftSettingThird />} />  {/* done */}
          <Route path="/league-fees" element={<LeagueFees />} /> {/* done */}
          <Route path="/league-price" element={<LeaguePrice />} /> {/* done */}
          <Route path="/side-pool" element={<SidePool />} /> {/* done */}
          <Route path="/position-limits" element={<PositionLimits />} />  {/* done */}
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
