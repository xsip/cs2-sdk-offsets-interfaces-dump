// generated - do not edit!

import {server_CTeamplayRules} from './CTeamplayRules';
// Class size: 0x11440
// BaseClass: : public CS2::server::CTeamplayRules
export const server_CCSGameRules  = {
	...server_CTeamplayRules,
	m_bFreezePeriod: 216n, // bool m_bFreezePeriod; |  0xd8 | Schema_Builtin | Size: 0x1
	m_bWarmupPeriod: 217n, // bool m_bWarmupPeriod; |  0xd9 | Schema_Builtin | Size: 0x1
	m_fWarmupPeriodEnd: 220n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fWarmupPeriodStart: 224n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bTerroristTimeOutActive: 228n, // bool m_bTerroristTimeOutActive; |  0xe4 | Schema_Builtin | Size: 0x1
	m_bCTTimeOutActive: 229n, // bool m_bCTTimeOutActive; |  0xe5 | Schema_Builtin | Size: 0x1
	m_flTerroristTimeOutRemaining: 232n, // float32 m_flTerroristTimeOutRemaining; |  0xe8 | Schema_Builtin | Size: 0x4
	m_flCTTimeOutRemaining: 236n, // float32 m_flCTTimeOutRemaining; |  0xec | Schema_Builtin | Size: 0x4
	m_nTerroristTimeOuts: 240n, // int32_t m_nTerroristTimeOuts; |  0xf0 | Schema_Builtin | Size: 0x4
	m_nCTTimeOuts: 244n, // int32_t m_nCTTimeOuts; |  0xf4 | Schema_Builtin | Size: 0x4
	m_bTechnicalTimeOut: 248n, // bool m_bTechnicalTimeOut; |  0xf8 | Schema_Builtin | Size: 0x1
	m_bMatchWaitingForResume: 249n, // bool m_bMatchWaitingForResume; |  0xf9 | Schema_Builtin | Size: 0x1
	m_iFreezeTime: 252n, // int32_t m_iFreezeTime; |  0xfc | Schema_Builtin | Size: 0x4
	m_iRoundTime: 256n, // int32_t m_iRoundTime; |  0x100 | Schema_Builtin | Size: 0x4
	m_fMatchStartTime: 260n, // float32 m_fMatchStartTime; |  0x104 | Schema_Builtin | Size: 0x4
	m_fRoundStartTime: 264n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flRestartRoundTime: 268n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGameRestart: 272n, // bool m_bGameRestart; |  0x110 | Schema_Builtin | Size: 0x1
	m_flGameStartTime: 276n, // float32 m_flGameStartTime; |  0x114 | Schema_Builtin | Size: 0x4
	m_timeUntilNextPhaseStarts: 280n, // float32 m_timeUntilNextPhaseStarts; |  0x118 | Schema_Builtin | Size: 0x4
	m_gamePhase: 284n, // int32_t m_gamePhase; |  0x11c | Schema_Builtin | Size: 0x4
	m_totalRoundsPlayed: 288n, // int32_t m_totalRoundsPlayed; |  0x120 | Schema_Builtin | Size: 0x4
	m_nRoundsPlayedThisPhase: 292n, // int32_t m_nRoundsPlayedThisPhase; |  0x124 | Schema_Builtin | Size: 0x4
	m_nOvertimePlaying: 296n, // int32_t m_nOvertimePlaying; |  0x128 | Schema_Builtin | Size: 0x4
	m_iHostagesRemaining: 300n, // int32_t m_iHostagesRemaining; |  0x12c | Schema_Builtin | Size: 0x4
	m_bAnyHostageReached: 304n, // bool m_bAnyHostageReached; |  0x130 | Schema_Builtin | Size: 0x1
	m_bMapHasBombTarget: 305n, // bool m_bMapHasBombTarget; |  0x131 | Schema_Builtin | Size: 0x1
	m_bMapHasRescueZone: 306n, // bool m_bMapHasRescueZone; |  0x132 | Schema_Builtin | Size: 0x1
	m_bMapHasBuyZone: 307n, // bool m_bMapHasBuyZone; |  0x133 | Schema_Builtin | Size: 0x1
	m_bIsQueuedMatchmaking: 308n, // bool m_bIsQueuedMatchmaking; |  0x134 | Schema_Builtin | Size: 0x1
	m_nQueuedMatchmakingMode: 312n, // int32_t m_nQueuedMatchmakingMode; |  0x138 | Schema_Builtin | Size: 0x4
	m_bIsValveDS: 316n, // bool m_bIsValveDS; |  0x13c | Schema_Builtin | Size: 0x1
	m_bLogoMap: 317n, // bool m_bLogoMap; |  0x13d | Schema_Builtin | Size: 0x1
	m_bPlayAllStepSoundsOnServer: 318n, // bool m_bPlayAllStepSoundsOnServer; |  0x13e | Schema_Builtin | Size: 0x1
	m_iSpectatorSlotCount: 320n, // int32_t m_iSpectatorSlotCount; |  0x140 | Schema_Builtin | Size: 0x4
	m_MatchDevice: 324n, // int32_t m_MatchDevice; |  0x144 | Schema_Builtin | Size: 0x4
	m_bHasMatchStarted: 328n, // bool m_bHasMatchStarted; |  0x148 | Schema_Builtin | Size: 0x1
	m_nNextMapInMapgroup: 332n, // int32_t m_nNextMapInMapgroup; |  0x14c | Schema_Builtin | Size: 0x4
	m_szTournamentEventName: 336n, // char m_szTournamentEventName[512]; |  0x150 | Schema_FixedArray | Size: 0x200
	m_szTournamentEventStage: 848n, // char m_szTournamentEventStage[512]; |  0x350 | Schema_FixedArray | Size: 0x200
	m_szMatchStatTxt: 1360n, // char m_szMatchStatTxt[512]; |  0x550 | Schema_FixedArray | Size: 0x200
	m_szTournamentPredictionsTxt: 1872n, // char m_szTournamentPredictionsTxt[512]; |  0x750 | Schema_FixedArray | Size: 0x200
	m_nTournamentPredictionsPct: 2384n, // int32_t m_nTournamentPredictionsPct; |  0x950 | Schema_Builtin | Size: 0x4
	m_flCMMItemDropRevealStartTime: 2388n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flCMMItemDropRevealEndTime: 2392n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsDroppingItems: 2396n, // bool m_bIsDroppingItems; |  0x95c | Schema_Builtin | Size: 0x1
	m_bIsQuestEligible: 2397n, // bool m_bIsQuestEligible; |  0x95d | Schema_Builtin | Size: 0x1
	m_bIsHltvActive: 2398n, // bool m_bIsHltvActive; |  0x95e | Schema_Builtin | Size: 0x1
	m_bBombPlanted: 2399n, // bool m_bBombPlanted; |  0x95f | Schema_Builtin | Size: 0x1
	m_arrProhibitedItemIndices: 2400n, // uint16_t m_arrProhibitedItemIndices[100]; |  0x960 | Schema_FixedArray | Size: 0xc8
	m_arrTournamentActiveCasterAccounts: 2600n, // uint32_t m_arrTournamentActiveCasterAccounts[4]; |  0xa28 | Schema_FixedArray | Size: 0x10
	m_numBestOfMaps: 2616n, // int32_t m_numBestOfMaps; |  0xa38 | Schema_Builtin | Size: 0x4
	m_nHalloweenMaskListSeed: 2620n, // int32_t m_nHalloweenMaskListSeed; |  0xa3c | Schema_Builtin | Size: 0x4
	m_bBombDropped: 2624n, // bool m_bBombDropped; |  0xa40 | Schema_Builtin | Size: 0x1
	m_iRoundWinStatus: 2628n, // int32_t m_iRoundWinStatus; |  0xa44 | Schema_Builtin | Size: 0x4
	m_eRoundWinReason: 2632n, // int32_t m_eRoundWinReason; |  0xa48 | Schema_Builtin | Size: 0x4
	m_bTCantBuy: 2636n, // bool m_bTCantBuy; |  0xa4c | Schema_Builtin | Size: 0x1
	m_bCTCantBuy: 2637n, // bool m_bCTCantBuy; |  0xa4d | Schema_Builtin | Size: 0x1
	m_iMatchStats_RoundResults: 2640n, // int32_t m_iMatchStats_RoundResults[30]; |  0xa50 | Schema_FixedArray | Size: 0x78
	m_iMatchStats_PlayersAlive_CT: 2760n, // int32_t m_iMatchStats_PlayersAlive_CT[30]; |  0xac8 | Schema_FixedArray | Size: 0x78
	m_iMatchStats_PlayersAlive_T: 2880n, // int32_t m_iMatchStats_PlayersAlive_T[30]; |  0xb40 | Schema_FixedArray | Size: 0x78
	m_TeamRespawnWaveTimes: 3000n, // float32 m_TeamRespawnWaveTimes[32]; |  0xbb8 | Schema_FixedArray | Size: 0x80
	m_flNextRespawnWave: 3128n, // GlobalTypes::GameTime_t[32]  | Schema_FixedArray | Size: 0x1000
	m_vMinimapMins: 3256n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vMinimapMaxs: 3268n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_MinimapVerticalSectionHeights: 3280n, // float32 m_MinimapVerticalSectionHeights[8]; |  0xcd0 | Schema_FixedArray | Size: 0x20
	m_ullLocalMatchID: 3312n, // uint64_t m_ullLocalMatchID; |  0xcf0 | Schema_Builtin | Size: 0x8
	m_nEndMatchMapGroupVoteTypes: 3320n, // int32_t m_nEndMatchMapGroupVoteTypes[10]; |  0xcf8 | Schema_FixedArray | Size: 0x28
	m_nEndMatchMapGroupVoteOptions: 3360n, // int32_t m_nEndMatchMapGroupVoteOptions[10]; |  0xd20 | Schema_FixedArray | Size: 0x28
	m_nEndMatchMapVoteWinner: 3400n, // int32_t m_nEndMatchMapVoteWinner; |  0xd48 | Schema_Builtin | Size: 0x4
	m_iNumConsecutiveCTLoses: 3404n, // int32_t m_iNumConsecutiveCTLoses; |  0xd4c | Schema_Builtin | Size: 0x4
	m_iNumConsecutiveTerroristLoses: 3408n, // int32_t m_iNumConsecutiveTerroristLoses; |  0xd50 | Schema_Builtin | Size: 0x4
	m_bHasHostageBeenTouched: 3440n, // bool m_bHasHostageBeenTouched; |  0xd70 | Schema_Builtin | Size: 0x1
	m_flIntermissionStartTime: 3444n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flIntermissionEndTime: 3448n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bLevelInitialized: 3452n, // bool m_bLevelInitialized; |  0xd7c | Schema_Builtin | Size: 0x1
	m_iTotalRoundsPlayed: 3456n, // int32_t m_iTotalRoundsPlayed; |  0xd80 | Schema_Builtin | Size: 0x4
	m_iUnBalancedRounds: 3460n, // int32_t m_iUnBalancedRounds; |  0xd84 | Schema_Builtin | Size: 0x4
	m_endMatchOnRoundReset: 3464n, // bool m_endMatchOnRoundReset; |  0xd88 | Schema_Builtin | Size: 0x1
	m_endMatchOnThink: 3465n, // bool m_endMatchOnThink; |  0xd89 | Schema_Builtin | Size: 0x1
	m_iNumTerrorist: 3468n, // int32_t m_iNumTerrorist; |  0xd8c | Schema_Builtin | Size: 0x4
	m_iNumCT: 3472n, // int32_t m_iNumCT; |  0xd90 | Schema_Builtin | Size: 0x4
	m_iNumSpawnableTerrorist: 3476n, // int32_t m_iNumSpawnableTerrorist; |  0xd94 | Schema_Builtin | Size: 0x4
	m_iNumSpawnableCT: 3480n, // int32_t m_iNumSpawnableCT; |  0xd98 | Schema_Builtin | Size: 0x4
	m_arrSelectedHostageSpawnIndices: 3488n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_nSpawnPointsRandomSeed: 3512n, // int32_t m_nSpawnPointsRandomSeed; |  0xdb8 | Schema_Builtin | Size: 0x4
	m_bFirstConnected: 3516n, // bool m_bFirstConnected; |  0xdbc | Schema_Builtin | Size: 0x1
	m_bCompleteReset: 3517n, // bool m_bCompleteReset; |  0xdbd | Schema_Builtin | Size: 0x1
	m_bPickNewTeamsOnReset: 3518n, // bool m_bPickNewTeamsOnReset; |  0xdbe | Schema_Builtin | Size: 0x1
	m_bScrambleTeamsOnRestart: 3519n, // bool m_bScrambleTeamsOnRestart; |  0xdbf | Schema_Builtin | Size: 0x1
	m_bSwapTeamsOnRestart: 3520n, // bool m_bSwapTeamsOnRestart; |  0xdc0 | Schema_Builtin | Size: 0x1
	m_nEndMatchTiedVotes: 3528n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_bNeedToAskPlayersForContinueVote: 3556n, // bool m_bNeedToAskPlayersForContinueVote; |  0xde4 | Schema_Builtin | Size: 0x1
	m_numQueuedMatchmakingAccounts: 3560n, // uint32_t m_numQueuedMatchmakingAccounts; |  0xde8 | Schema_Builtin | Size: 0x4
	m_fAvgPlayerRank: 3564n, // float32 m_fAvgPlayerRank; |  0xdec | Schema_Builtin | Size: 0x4
	m_pQueuedMatchmakingReservationString: 3568n, // char* m_pQueuedMatchmakingReservationString; |  0xdf0 | Schema_Ptr | Size: 0x8
	m_numTotalTournamentDrops: 3576n, // uint32_t m_numTotalTournamentDrops; |  0xdf8 | Schema_Builtin | Size: 0x4
	m_numSpectatorsCountMax: 3580n, // uint32_t m_numSpectatorsCountMax; |  0xdfc | Schema_Builtin | Size: 0x4
	m_numSpectatorsCountMaxTV: 3584n, // uint32_t m_numSpectatorsCountMaxTV; |  0xe00 | Schema_Builtin | Size: 0x4
	m_numSpectatorsCountMaxLnk: 3588n, // uint32_t m_numSpectatorsCountMaxLnk; |  0xe04 | Schema_Builtin | Size: 0x4
	m_nCTsAliveAtFreezetimeEnd: 3600n, // int32_t m_nCTsAliveAtFreezetimeEnd; |  0xe10 | Schema_Builtin | Size: 0x4
	m_nTerroristsAliveAtFreezetimeEnd: 3604n, // int32_t m_nTerroristsAliveAtFreezetimeEnd; |  0xe14 | Schema_Builtin | Size: 0x4
	m_bForceTeamChangeSilent: 3608n, // bool m_bForceTeamChangeSilent; |  0xe18 | Schema_Builtin | Size: 0x1
	m_bLoadingRoundBackupData: 3609n, // bool m_bLoadingRoundBackupData; |  0xe19 | Schema_Builtin | Size: 0x1
	m_nMatchInfoShowType: 3664n, // int32_t m_nMatchInfoShowType; |  0xe50 | Schema_Builtin | Size: 0x4
	m_flMatchInfoDecidedTime: 3668n, // float32 m_flMatchInfoDecidedTime; |  0xe54 | Schema_Builtin | Size: 0x4
	mTeamDMLastWinningTeamNumber: 3696n, // int32_t mTeamDMLastWinningTeamNumber; |  0xe70 | Schema_Builtin | Size: 0x4
	mTeamDMLastThinkTime: 3700n, // float32 mTeamDMLastThinkTime; |  0xe74 | Schema_Builtin | Size: 0x4
	m_flTeamDMLastAnnouncementTime: 3704n, // float32 m_flTeamDMLastAnnouncementTime; |  0xe78 | Schema_Builtin | Size: 0x4
	m_iAccountTerrorist: 3708n, // int32_t m_iAccountTerrorist; |  0xe7c | Schema_Builtin | Size: 0x4
	m_iAccountCT: 3712n, // int32_t m_iAccountCT; |  0xe80 | Schema_Builtin | Size: 0x4
	m_iSpawnPointCount_Terrorist: 3716n, // int32_t m_iSpawnPointCount_Terrorist; |  0xe84 | Schema_Builtin | Size: 0x4
	m_iSpawnPointCount_CT: 3720n, // int32_t m_iSpawnPointCount_CT; |  0xe88 | Schema_Builtin | Size: 0x4
	m_iMaxNumTerrorists: 3724n, // int32_t m_iMaxNumTerrorists; |  0xe8c | Schema_Builtin | Size: 0x4
	m_iMaxNumCTs: 3728n, // int32_t m_iMaxNumCTs; |  0xe90 | Schema_Builtin | Size: 0x4
	m_iLoserBonusMostRecentTeam: 3732n, // int32_t m_iLoserBonusMostRecentTeam; |  0xe94 | Schema_Builtin | Size: 0x4
	m_tmNextPeriodicThink: 3736n, // float32 m_tmNextPeriodicThink; |  0xe98 | Schema_Builtin | Size: 0x4
	m_bVoiceWonMatchBragFired: 3740n, // bool m_bVoiceWonMatchBragFired; |  0xe9c | Schema_Builtin | Size: 0x1
	m_fWarmupNextChatNoticeTime: 3744n, // float32 m_fWarmupNextChatNoticeTime; |  0xea0 | Schema_Builtin | Size: 0x4
	m_iHostagesRescued: 3752n, // int32_t m_iHostagesRescued; |  0xea8 | Schema_Builtin | Size: 0x4
	m_iHostagesTouched: 3756n, // int32_t m_iHostagesTouched; |  0xeac | Schema_Builtin | Size: 0x4
	m_flNextHostageAnnouncement: 3760n, // float32 m_flNextHostageAnnouncement; |  0xeb0 | Schema_Builtin | Size: 0x4
	m_bNoTerroristsKilled: 3764n, // bool m_bNoTerroristsKilled; |  0xeb4 | Schema_Builtin | Size: 0x1
	m_bNoCTsKilled: 3765n, // bool m_bNoCTsKilled; |  0xeb5 | Schema_Builtin | Size: 0x1
	m_bNoEnemiesKilled: 3766n, // bool m_bNoEnemiesKilled; |  0xeb6 | Schema_Builtin | Size: 0x1
	m_bCanDonateWeapons: 3767n, // bool m_bCanDonateWeapons; |  0xeb7 | Schema_Builtin | Size: 0x1
	m_firstKillTime: 3772n, // float32 m_firstKillTime; |  0xebc | Schema_Builtin | Size: 0x4
	m_firstBloodTime: 3780n, // float32 m_firstBloodTime; |  0xec4 | Schema_Builtin | Size: 0x4
	m_hostageWasInjured: 3808n, // bool m_hostageWasInjured; |  0xee0 | Schema_Builtin | Size: 0x1
	m_hostageWasKilled: 3809n, // bool m_hostageWasKilled; |  0xee1 | Schema_Builtin | Size: 0x1
	m_bVoteCalled: 3824n, // bool m_bVoteCalled; |  0xef0 | Schema_Builtin | Size: 0x1
	m_bServerVoteOnReset: 3825n, // bool m_bServerVoteOnReset; |  0xef1 | Schema_Builtin | Size: 0x1
	m_flVoteCheckThrottle: 3828n, // float32 m_flVoteCheckThrottle; |  0xef4 | Schema_Builtin | Size: 0x4
	m_bBuyTimeEnded: 3832n, // bool m_bBuyTimeEnded; |  0xef8 | Schema_Builtin | Size: 0x1
	m_nLastFreezeEndBeep: 3836n, // int32_t m_nLastFreezeEndBeep; |  0xefc | Schema_Builtin | Size: 0x4
	m_bTargetBombed: 3840n, // bool m_bTargetBombed; |  0xf00 | Schema_Builtin | Size: 0x1
	m_bBombDefused: 3841n, // bool m_bBombDefused; |  0xf01 | Schema_Builtin | Size: 0x1
	m_bMapHasBombZone: 3842n, // bool m_bMapHasBombZone; |  0xf02 | Schema_Builtin | Size: 0x1
	m_vecMainCTSpawnPos: 3920n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_CTSpawnPointsMasterList: 3936n, // server::CUtlVector<GlobalTypes::CHandle<server::SpawnPoint>>  | Schema_Atomic | Size: 0x18
	m_TerroristSpawnPointsMasterList: 3960n, // server::CUtlVector<GlobalTypes::CHandle<server::SpawnPoint>>  | Schema_Atomic | Size: 0x18
	m_bRespawningAllRespawnablePlayers: 3984n, // bool m_bRespawningAllRespawnablePlayers; |  0xf90 | Schema_Builtin | Size: 0x1
	m_iNextCTSpawnPoint: 3988n, // int32_t m_iNextCTSpawnPoint; |  0xf94 | Schema_Builtin | Size: 0x4
	m_flCTSpawnPointUsedTime: 3992n, // float32 m_flCTSpawnPointUsedTime; |  0xf98 | Schema_Builtin | Size: 0x4
	m_iNextTerroristSpawnPoint: 3996n, // int32_t m_iNextTerroristSpawnPoint; |  0xf9c | Schema_Builtin | Size: 0x4
	m_flTerroristSpawnPointUsedTime: 4000n, // float32 m_flTerroristSpawnPointUsedTime; |  0xfa0 | Schema_Builtin | Size: 0x4
	m_CTSpawnPoints: 4008n, // server::CUtlVector<GlobalTypes::CHandle<server::SpawnPoint>>  | Schema_Atomic | Size: 0x18
	m_TerroristSpawnPoints: 4032n, // server::CUtlVector<GlobalTypes::CHandle<server::SpawnPoint>>  | Schema_Atomic | Size: 0x18
	m_bIsUnreservedGameServer: 4056n, // bool m_bIsUnreservedGameServer; |  0xfd8 | Schema_Builtin | Size: 0x1
	m_fAutobalanceDisplayTime: 4060n, // float32 m_fAutobalanceDisplayTime; |  0xfdc | Schema_Builtin | Size: 0x4
	m_bAllowWeaponSwitch: 4120n, // bool m_bAllowWeaponSwitch; |  0x1018 | Schema_Builtin | Size: 0x1
	m_bRoundTimeWarningTriggered: 4121n, // bool m_bRoundTimeWarningTriggered; |  0x1019 | Schema_Builtin | Size: 0x1
	m_phaseChangeAnnouncementTime: 4124n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fNextUpdateTeamClanNamesTime: 4128n, // float32 m_fNextUpdateTeamClanNamesTime; |  0x1020 | Schema_Builtin | Size: 0x4
	m_flLastThinkTime: 4132n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fAccumulatedRoundOffDamage: 4136n, // float32 m_fAccumulatedRoundOffDamage; |  0x1028 | Schema_Builtin | Size: 0x4
	m_nShorthandedBonusLastEvalRound: 4140n, // int32_t m_nShorthandedBonusLastEvalRound; |  0x102c | Schema_Builtin | Size: 0x4
	m_nMatchAbortedEarlyReason: 4216n, // int32_t m_nMatchAbortedEarlyReason; |  0x1078 | Schema_Builtin | Size: 0x4
	m_bHasTriggeredRoundStartMusic: 4220n, // bool m_bHasTriggeredRoundStartMusic; |  0x107c | Schema_Builtin | Size: 0x1
	m_bSwitchingTeamsAtRoundReset: 4221n, // bool m_bSwitchingTeamsAtRoundReset; |  0x107d | Schema_Builtin | Size: 0x1
	m_pGameModeRules: 4248n, // server::CCSGameModeRules**  | Schema_Ptr | Size: 0x8
	m_BtGlobalBlackboard: 4256n, // GlobalTypes::KeyValues3  | Schema_Atomic | Size: 0x10
	m_hPlayerResource: 4408n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_RetakeRules: 4416n, // server::CRetakeGameRules  | Schema_DeclaredClass | Size: 0x1f0
	m_arrTeamUniqueKillWeaponsMatch: 4912n, // GlobalTypes::CUtlVector  | Schema_FixedArray | Size: 0x60
	m_bTeamLastKillUsedUniqueWeaponMatch: 5008n, // bool m_bTeamLastKillUsedUniqueWeaponMatch[4]; |  0x1390 | Schema_FixedArray | Size: 0x4
	m_nMatchEndCount: 5048n, // uint8_t m_nMatchEndCount; |  0x13b8 | Schema_Builtin | Size: 0x1
	m_nTTeamIntroVariant: 5052n, // int32_t m_nTTeamIntroVariant; |  0x13bc | Schema_Builtin | Size: 0x4
	m_nCTTeamIntroVariant: 5056n, // int32_t m_nCTTeamIntroVariant; |  0x13c0 | Schema_Builtin | Size: 0x4
	m_bTeamIntroPeriod: 5060n, // bool m_bTeamIntroPeriod; |  0x13c4 | Schema_Builtin | Size: 0x1
	m_fTeamIntroPeriodEnd: 5064n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bPlayedTeamIntroVO: 5068n, // bool m_bPlayedTeamIntroVO; |  0x13cc | Schema_Builtin | Size: 0x1
	m_iRoundEndWinnerTeam: 5072n, // int32_t m_iRoundEndWinnerTeam; |  0x13d0 | Schema_Builtin | Size: 0x4
	m_eRoundEndReason: 5076n, // int32_t m_eRoundEndReason; |  0x13d4 | Schema_Builtin | Size: 0x4
	m_bRoundEndShowTimerDefend: 5080n, // bool m_bRoundEndShowTimerDefend; |  0x13d8 | Schema_Builtin | Size: 0x1
	m_iRoundEndTimerTime: 5084n, // int32_t m_iRoundEndTimerTime; |  0x13dc | Schema_Builtin | Size: 0x4
	m_sRoundEndFunFactToken: 5088n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_iRoundEndFunFactPlayerSlot: 5096n, // GlobalTypes::CPlayerSlot  | Schema_Atomic | Size: 0x4
	m_iRoundEndFunFactData1: 5100n, // int32_t m_iRoundEndFunFactData1; |  0x13ec | Schema_Builtin | Size: 0x4
	m_iRoundEndFunFactData2: 5104n, // int32_t m_iRoundEndFunFactData2; |  0x13f0 | Schema_Builtin | Size: 0x4
	m_iRoundEndFunFactData3: 5108n, // int32_t m_iRoundEndFunFactData3; |  0x13f4 | Schema_Builtin | Size: 0x4
	m_sRoundEndMessage: 5112n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_iRoundEndPlayerCount: 5120n, // int32_t m_iRoundEndPlayerCount; |  0x1400 | Schema_Builtin | Size: 0x4
	m_bRoundEndNoMusic: 5124n, // bool m_bRoundEndNoMusic; |  0x1404 | Schema_Builtin | Size: 0x1
	m_iRoundEndLegacy: 5128n, // int32_t m_iRoundEndLegacy; |  0x1408 | Schema_Builtin | Size: 0x4
	m_nRoundEndCount: 5132n, // uint8_t m_nRoundEndCount; |  0x140c | Schema_Builtin | Size: 0x1
	m_iRoundStartRoundNumber: 5136n, // int32_t m_iRoundStartRoundNumber; |  0x1410 | Schema_Builtin | Size: 0x4
	m_nRoundStartCount: 5140n, // uint8_t m_nRoundStartCount; |  0x1414 | Schema_Builtin | Size: 0x1
	m_flLastPerfSampleTime: 21536n, // float64 m_flLastPerfSampleTime; |  0x5420 | Schema_Builtin | Size: 0x8
}
