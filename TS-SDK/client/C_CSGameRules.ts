// generated - do not edit!

import {client_C_TeamplayRules} from './C_TeamplayRules';
// Class size: 0x4F60
// BaseClass: : public CS2::client::C_TeamplayRules
export const client_C_CSGameRules  = {
	...client_C_TeamplayRules,
	m_bFreezePeriod: 64n, // bool m_bFreezePeriod; |  0x40 | Schema_Builtin | Size: 0x1
	m_bWarmupPeriod: 65n, // bool m_bWarmupPeriod; |  0x41 | Schema_Builtin | Size: 0x1
	m_fWarmupPeriodEnd: 68n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fWarmupPeriodStart: 72n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bTerroristTimeOutActive: 76n, // bool m_bTerroristTimeOutActive; |  0x4c | Schema_Builtin | Size: 0x1
	m_bCTTimeOutActive: 77n, // bool m_bCTTimeOutActive; |  0x4d | Schema_Builtin | Size: 0x1
	m_flTerroristTimeOutRemaining: 80n, // float32 m_flTerroristTimeOutRemaining; |  0x50 | Schema_Builtin | Size: 0x4
	m_flCTTimeOutRemaining: 84n, // float32 m_flCTTimeOutRemaining; |  0x54 | Schema_Builtin | Size: 0x4
	m_nTerroristTimeOuts: 88n, // int32_t m_nTerroristTimeOuts; |  0x58 | Schema_Builtin | Size: 0x4
	m_nCTTimeOuts: 92n, // int32_t m_nCTTimeOuts; |  0x5c | Schema_Builtin | Size: 0x4
	m_bTechnicalTimeOut: 96n, // bool m_bTechnicalTimeOut; |  0x60 | Schema_Builtin | Size: 0x1
	m_bMatchWaitingForResume: 97n, // bool m_bMatchWaitingForResume; |  0x61 | Schema_Builtin | Size: 0x1
	m_iFreezeTime: 100n, // int32_t m_iFreezeTime; |  0x64 | Schema_Builtin | Size: 0x4
	m_iRoundTime: 104n, // int32_t m_iRoundTime; |  0x68 | Schema_Builtin | Size: 0x4
	m_fMatchStartTime: 108n, // float32 m_fMatchStartTime; |  0x6c | Schema_Builtin | Size: 0x4
	m_fRoundStartTime: 112n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flRestartRoundTime: 116n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGameRestart: 120n, // bool m_bGameRestart; |  0x78 | Schema_Builtin | Size: 0x1
	m_flGameStartTime: 124n, // float32 m_flGameStartTime; |  0x7c | Schema_Builtin | Size: 0x4
	m_timeUntilNextPhaseStarts: 128n, // float32 m_timeUntilNextPhaseStarts; |  0x80 | Schema_Builtin | Size: 0x4
	m_gamePhase: 132n, // int32_t m_gamePhase; |  0x84 | Schema_Builtin | Size: 0x4
	m_totalRoundsPlayed: 136n, // int32_t m_totalRoundsPlayed; |  0x88 | Schema_Builtin | Size: 0x4
	m_nRoundsPlayedThisPhase: 140n, // int32_t m_nRoundsPlayedThisPhase; |  0x8c | Schema_Builtin | Size: 0x4
	m_nOvertimePlaying: 144n, // int32_t m_nOvertimePlaying; |  0x90 | Schema_Builtin | Size: 0x4
	m_iHostagesRemaining: 148n, // int32_t m_iHostagesRemaining; |  0x94 | Schema_Builtin | Size: 0x4
	m_bAnyHostageReached: 152n, // bool m_bAnyHostageReached; |  0x98 | Schema_Builtin | Size: 0x1
	m_bMapHasBombTarget: 153n, // bool m_bMapHasBombTarget; |  0x99 | Schema_Builtin | Size: 0x1
	m_bMapHasRescueZone: 154n, // bool m_bMapHasRescueZone; |  0x9a | Schema_Builtin | Size: 0x1
	m_bMapHasBuyZone: 155n, // bool m_bMapHasBuyZone; |  0x9b | Schema_Builtin | Size: 0x1
	m_bIsQueuedMatchmaking: 156n, // bool m_bIsQueuedMatchmaking; |  0x9c | Schema_Builtin | Size: 0x1
	m_nQueuedMatchmakingMode: 160n, // int32_t m_nQueuedMatchmakingMode; |  0xa0 | Schema_Builtin | Size: 0x4
	m_bIsValveDS: 164n, // bool m_bIsValveDS; |  0xa4 | Schema_Builtin | Size: 0x1
	m_bLogoMap: 165n, // bool m_bLogoMap; |  0xa5 | Schema_Builtin | Size: 0x1
	m_bPlayAllStepSoundsOnServer: 166n, // bool m_bPlayAllStepSoundsOnServer; |  0xa6 | Schema_Builtin | Size: 0x1
	m_iSpectatorSlotCount: 168n, // int32_t m_iSpectatorSlotCount; |  0xa8 | Schema_Builtin | Size: 0x4
	m_MatchDevice: 172n, // int32_t m_MatchDevice; |  0xac | Schema_Builtin | Size: 0x4
	m_bHasMatchStarted: 176n, // bool m_bHasMatchStarted; |  0xb0 | Schema_Builtin | Size: 0x1
	m_nNextMapInMapgroup: 180n, // int32_t m_nNextMapInMapgroup; |  0xb4 | Schema_Builtin | Size: 0x4
	m_szTournamentEventName: 184n, // char m_szTournamentEventName[512]; |  0xb8 | Schema_FixedArray | Size: 0x200
	m_szTournamentEventStage: 696n, // char m_szTournamentEventStage[512]; |  0x2b8 | Schema_FixedArray | Size: 0x200
	m_szMatchStatTxt: 1208n, // char m_szMatchStatTxt[512]; |  0x4b8 | Schema_FixedArray | Size: 0x200
	m_szTournamentPredictionsTxt: 1720n, // char m_szTournamentPredictionsTxt[512]; |  0x6b8 | Schema_FixedArray | Size: 0x200
	m_nTournamentPredictionsPct: 2232n, // int32_t m_nTournamentPredictionsPct; |  0x8b8 | Schema_Builtin | Size: 0x4
	m_flCMMItemDropRevealStartTime: 2236n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flCMMItemDropRevealEndTime: 2240n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsDroppingItems: 2244n, // bool m_bIsDroppingItems; |  0x8c4 | Schema_Builtin | Size: 0x1
	m_bIsQuestEligible: 2245n, // bool m_bIsQuestEligible; |  0x8c5 | Schema_Builtin | Size: 0x1
	m_bIsHltvActive: 2246n, // bool m_bIsHltvActive; |  0x8c6 | Schema_Builtin | Size: 0x1
	m_arrProhibitedItemIndices: 2248n, // uint16_t m_arrProhibitedItemIndices[100]; |  0x8c8 | Schema_FixedArray | Size: 0xc8
	m_arrTournamentActiveCasterAccounts: 2448n, // uint32_t m_arrTournamentActiveCasterAccounts[4]; |  0x990 | Schema_FixedArray | Size: 0x10
	m_numBestOfMaps: 2464n, // int32_t m_numBestOfMaps; |  0x9a0 | Schema_Builtin | Size: 0x4
	m_nHalloweenMaskListSeed: 2468n, // int32_t m_nHalloweenMaskListSeed; |  0x9a4 | Schema_Builtin | Size: 0x4
	m_bBombDropped: 2472n, // bool m_bBombDropped; |  0x9a8 | Schema_Builtin | Size: 0x1
	m_bBombPlanted: 2473n, // bool m_bBombPlanted; |  0x9a9 | Schema_Builtin | Size: 0x1
	m_iRoundWinStatus: 2476n, // int32_t m_iRoundWinStatus; |  0x9ac | Schema_Builtin | Size: 0x4
	m_eRoundWinReason: 2480n, // int32_t m_eRoundWinReason; |  0x9b0 | Schema_Builtin | Size: 0x4
	m_bTCantBuy: 2484n, // bool m_bTCantBuy; |  0x9b4 | Schema_Builtin | Size: 0x1
	m_bCTCantBuy: 2485n, // bool m_bCTCantBuy; |  0x9b5 | Schema_Builtin | Size: 0x1
	m_iMatchStats_RoundResults: 2488n, // int32_t m_iMatchStats_RoundResults[30]; |  0x9b8 | Schema_FixedArray | Size: 0x78
	m_iMatchStats_PlayersAlive_CT: 2608n, // int32_t m_iMatchStats_PlayersAlive_CT[30]; |  0xa30 | Schema_FixedArray | Size: 0x78
	m_iMatchStats_PlayersAlive_T: 2728n, // int32_t m_iMatchStats_PlayersAlive_T[30]; |  0xaa8 | Schema_FixedArray | Size: 0x78
	m_TeamRespawnWaveTimes: 2848n, // float32 m_TeamRespawnWaveTimes[32]; |  0xb20 | Schema_FixedArray | Size: 0x80
	m_flNextRespawnWave: 2976n, // GlobalTypes::GameTime_t[32]  | Schema_FixedArray | Size: 0x1000
	m_vMinimapMins: 3104n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vMinimapMaxs: 3116n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_MinimapVerticalSectionHeights: 3128n, // float32 m_MinimapVerticalSectionHeights[8]; |  0xc38 | Schema_FixedArray | Size: 0x20
	m_ullLocalMatchID: 3160n, // uint64_t m_ullLocalMatchID; |  0xc58 | Schema_Builtin | Size: 0x8
	m_nEndMatchMapGroupVoteTypes: 3168n, // int32_t m_nEndMatchMapGroupVoteTypes[10]; |  0xc60 | Schema_FixedArray | Size: 0x28
	m_nEndMatchMapGroupVoteOptions: 3208n, // int32_t m_nEndMatchMapGroupVoteOptions[10]; |  0xc88 | Schema_FixedArray | Size: 0x28
	m_nEndMatchMapVoteWinner: 3248n, // int32_t m_nEndMatchMapVoteWinner; |  0xcb0 | Schema_Builtin | Size: 0x4
	m_iNumConsecutiveCTLoses: 3252n, // int32_t m_iNumConsecutiveCTLoses; |  0xcb4 | Schema_Builtin | Size: 0x4
	m_iNumConsecutiveTerroristLoses: 3256n, // int32_t m_iNumConsecutiveTerroristLoses; |  0xcb8 | Schema_Builtin | Size: 0x4
	m_nMatchAbortedEarlyReason: 3448n, // int32_t m_nMatchAbortedEarlyReason; |  0xd78 | Schema_Builtin | Size: 0x4
	m_bHasTriggeredRoundStartMusic: 3452n, // bool m_bHasTriggeredRoundStartMusic; |  0xd7c | Schema_Builtin | Size: 0x1
	m_bSwitchingTeamsAtRoundReset: 3453n, // bool m_bSwitchingTeamsAtRoundReset; |  0xd7d | Schema_Builtin | Size: 0x1
	m_pGameModeRules: 3480n, // client::CCSGameModeRules**  | Schema_Ptr | Size: 0x8
	m_RetakeRules: 3488n, // client::C_RetakeGameRules  | Schema_DeclaredClass | Size: 0x158
	m_nMatchEndCount: 3832n, // uint8_t m_nMatchEndCount; |  0xef8 | Schema_Builtin | Size: 0x1
	m_nTTeamIntroVariant: 3836n, // int32_t m_nTTeamIntroVariant; |  0xefc | Schema_Builtin | Size: 0x4
	m_nCTTeamIntroVariant: 3840n, // int32_t m_nCTTeamIntroVariant; |  0xf00 | Schema_Builtin | Size: 0x4
	m_bTeamIntroPeriod: 3844n, // bool m_bTeamIntroPeriod; |  0xf04 | Schema_Builtin | Size: 0x1
	m_iRoundEndWinnerTeam: 3848n, // int32_t m_iRoundEndWinnerTeam; |  0xf08 | Schema_Builtin | Size: 0x4
	m_eRoundEndReason: 3852n, // int32_t m_eRoundEndReason; |  0xf0c | Schema_Builtin | Size: 0x4
	m_bRoundEndShowTimerDefend: 3856n, // bool m_bRoundEndShowTimerDefend; |  0xf10 | Schema_Builtin | Size: 0x1
	m_iRoundEndTimerTime: 3860n, // int32_t m_iRoundEndTimerTime; |  0xf14 | Schema_Builtin | Size: 0x4
	m_sRoundEndFunFactToken: 3864n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_iRoundEndFunFactPlayerSlot: 3872n, // GlobalTypes::CPlayerSlot  | Schema_Atomic | Size: 0x4
	m_iRoundEndFunFactData1: 3876n, // int32_t m_iRoundEndFunFactData1; |  0xf24 | Schema_Builtin | Size: 0x4
	m_iRoundEndFunFactData2: 3880n, // int32_t m_iRoundEndFunFactData2; |  0xf28 | Schema_Builtin | Size: 0x4
	m_iRoundEndFunFactData3: 3884n, // int32_t m_iRoundEndFunFactData3; |  0xf2c | Schema_Builtin | Size: 0x4
	m_sRoundEndMessage: 3888n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_iRoundEndPlayerCount: 3896n, // int32_t m_iRoundEndPlayerCount; |  0xf38 | Schema_Builtin | Size: 0x4
	m_bRoundEndNoMusic: 3900n, // bool m_bRoundEndNoMusic; |  0xf3c | Schema_Builtin | Size: 0x1
	m_iRoundEndLegacy: 3904n, // int32_t m_iRoundEndLegacy; |  0xf40 | Schema_Builtin | Size: 0x4
	m_nRoundEndCount: 3908n, // uint8_t m_nRoundEndCount; |  0xf44 | Schema_Builtin | Size: 0x1
	m_iRoundStartRoundNumber: 3912n, // int32_t m_iRoundStartRoundNumber; |  0xf48 | Schema_Builtin | Size: 0x4
	m_nRoundStartCount: 3916n, // uint8_t m_nRoundStartCount; |  0xf4c | Schema_Builtin | Size: 0x1
	m_flLastPerfSampleTime: 20312n, // float64 m_flLastPerfSampleTime; |  0x4f58 | Schema_Builtin | Size: 0x8
}
