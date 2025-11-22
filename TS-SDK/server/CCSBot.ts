// generated - do not edit!

import {server_CBot} from './CBot';
// Class size: 0x6D50
// BaseClass: : public CS2::server::CBot
export const server_CCSBot  = {
	...server_CBot,
	m_eyePosition: 264n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_name: 276n, // char m_name[64]; |  0x114 | Schema_FixedArray | Size: 0x40
	m_combatRange: 340n, // float32 m_combatRange; |  0x154 | Schema_Builtin | Size: 0x4
	m_isRogue: 344n, // bool m_isRogue; |  0x158 | Schema_Builtin | Size: 0x1
	m_rogueTimer: 352n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_diedLastRound: 380n, // bool m_diedLastRound; |  0x17c | Schema_Builtin | Size: 0x1
	m_safeTime: 384n, // float32 m_safeTime; |  0x180 | Schema_Builtin | Size: 0x4
	m_wasSafe: 388n, // bool m_wasSafe; |  0x184 | Schema_Builtin | Size: 0x1
	m_blindFire: 396n, // bool m_blindFire; |  0x18c | Schema_Builtin | Size: 0x1
	m_surpriseTimer: 400n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bAllowActive: 424n, // bool m_bAllowActive; |  0x1a8 | Schema_Builtin | Size: 0x1
	m_isFollowing: 425n, // bool m_isFollowing; |  0x1a9 | Schema_Builtin | Size: 0x1
	m_leader: 428n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_followTimestamp: 432n, // float32 m_followTimestamp; |  0x1b0 | Schema_Builtin | Size: 0x4
	m_allowAutoFollowTime: 436n, // float32 m_allowAutoFollowTime; |  0x1b4 | Schema_Builtin | Size: 0x4
	m_hurryTimer: 440n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_alertTimer: 464n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_sneakTimer: 488n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_panicTimer: 512n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_stateTimestamp: 1232n, // float32 m_stateTimestamp; |  0x4d0 | Schema_Builtin | Size: 0x4
	m_isAttacking: 1236n, // bool m_isAttacking; |  0x4d4 | Schema_Builtin | Size: 0x1
	m_isOpeningDoor: 1237n, // bool m_isOpeningDoor; |  0x4d5 | Schema_Builtin | Size: 0x1
	m_taskEntity: 1244n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_goalPosition: 1260n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_goalEntity: 1272n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_avoid: 1276n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_avoidTimestamp: 1280n, // float32 m_avoidTimestamp; |  0x500 | Schema_Builtin | Size: 0x4
	m_isStopping: 1284n, // bool m_isStopping; |  0x504 | Schema_Builtin | Size: 0x1
	m_hasVisitedEnemySpawn: 1285n, // bool m_hasVisitedEnemySpawn; |  0x505 | Schema_Builtin | Size: 0x1
	m_stillTimer: 1288n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_bEyeAnglesUnderPathFinderControl: 1304n, // bool m_bEyeAnglesUnderPathFinderControl; |  0x518 | Schema_Builtin | Size: 0x1
	m_pathIndex: 24088n, // int32_t m_pathIndex; |  0x5e18 | Schema_Builtin | Size: 0x4
	m_areaEnteredTimestamp: 24092n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_repathTimer: 24096n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_avoidFriendTimer: 24120n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isFriendInTheWay: 24144n, // bool m_isFriendInTheWay; |  0x5e50 | Schema_Builtin | Size: 0x1
	m_politeTimer: 24152n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isWaitingBehindFriend: 24176n, // bool m_isWaitingBehindFriend; |  0x5e70 | Schema_Builtin | Size: 0x1
	m_pathLadderEnd: 24220n, // float32 m_pathLadderEnd; |  0x5e9c | Schema_Builtin | Size: 0x4
	m_mustRunTimer: 24296n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_waitTimer: 24320n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_updateTravelDistanceTimer: 24344n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_playerTravelDistance: 24368n, // float32 m_playerTravelDistance[64]; |  0x5f30 | Schema_FixedArray | Size: 0x100
	m_travelDistancePhase: 24624n, // uint8_t m_travelDistancePhase; |  0x6030 | Schema_Builtin | Size: 0x1
	m_hostageEscortCount: 25032n, // uint8_t m_hostageEscortCount; |  0x61c8 | Schema_Builtin | Size: 0x1
	m_hostageEscortCountTimestamp: 25036n, // float32 m_hostageEscortCountTimestamp; |  0x61cc | Schema_Builtin | Size: 0x4
	m_desiredTeam: 25040n, // int32_t m_desiredTeam; |  0x61d0 | Schema_Builtin | Size: 0x4
	m_hasJoined: 25044n, // bool m_hasJoined; |  0x61d4 | Schema_Builtin | Size: 0x1
	m_isWaitingForHostage: 25045n, // bool m_isWaitingForHostage; |  0x61d5 | Schema_Builtin | Size: 0x1
	m_inhibitWaitingForHostageTimer: 25048n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_waitForHostageTimer: 25072n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_noisePosition: 25096n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_noiseTravelDistance: 25108n, // float32 m_noiseTravelDistance; |  0x6214 | Schema_Builtin | Size: 0x4
	m_noiseTimestamp: 25112n, // float32 m_noiseTimestamp; |  0x6218 | Schema_Builtin | Size: 0x4
	m_noiseSource: 25120n, // server::CCSPlayerPawn**  | Schema_Ptr | Size: 0x8
	m_noiseBendTimer: 25144n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bentNoisePosition: 25168n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bendNoisePositionValid: 25180n, // bool m_bendNoisePositionValid; |  0x625c | Schema_Builtin | Size: 0x1
	m_lookAroundStateTimestamp: 25184n, // float32 m_lookAroundStateTimestamp; |  0x6260 | Schema_Builtin | Size: 0x4
	m_lookAheadAngle: 25188n, // float32 m_lookAheadAngle; |  0x6264 | Schema_Builtin | Size: 0x4
	m_forwardAngle: 25192n, // float32 m_forwardAngle; |  0x6268 | Schema_Builtin | Size: 0x4
	m_inhibitLookAroundTimestamp: 25196n, // float32 m_inhibitLookAroundTimestamp; |  0x626c | Schema_Builtin | Size: 0x4
	m_lookAtSpot: 25204n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lookAtSpotDuration: 25220n, // float32 m_lookAtSpotDuration; |  0x6284 | Schema_Builtin | Size: 0x4
	m_lookAtSpotTimestamp: 25224n, // float32 m_lookAtSpotTimestamp; |  0x6288 | Schema_Builtin | Size: 0x4
	m_lookAtSpotAngleTolerance: 25228n, // float32 m_lookAtSpotAngleTolerance; |  0x628c | Schema_Builtin | Size: 0x4
	m_lookAtSpotClearIfClose: 25232n, // bool m_lookAtSpotClearIfClose; |  0x6290 | Schema_Builtin | Size: 0x1
	m_lookAtSpotAttack: 25233n, // bool m_lookAtSpotAttack; |  0x6291 | Schema_Builtin | Size: 0x1
	m_lookAtDesc: 25240n, // char* m_lookAtDesc; |  0x6298 | Schema_Ptr | Size: 0x8
	m_peripheralTimestamp: 25248n, // float32 m_peripheralTimestamp; |  0x62a0 | Schema_Builtin | Size: 0x4
	m_approachPointCount: 25640n, // uint8_t m_approachPointCount; |  0x6428 | Schema_Builtin | Size: 0x1
	m_approachPointViewPosition: 25644n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_viewSteadyTimer: 25656n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_tossGrenadeTimer: 25680n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isAvoidingGrenade: 25712n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_spotCheckTimestamp: 25744n, // float32 m_spotCheckTimestamp; |  0x6490 | Schema_Builtin | Size: 0x4
	m_checkedHidingSpotCount: 26776n, // int32_t m_checkedHidingSpotCount; |  0x6898 | Schema_Builtin | Size: 0x4
	m_lookPitch: 26780n, // float32 m_lookPitch; |  0x689c | Schema_Builtin | Size: 0x4
	m_lookPitchVel: 26784n, // float32 m_lookPitchVel; |  0x68a0 | Schema_Builtin | Size: 0x4
	m_lookYaw: 26788n, // float32 m_lookYaw; |  0x68a4 | Schema_Builtin | Size: 0x4
	m_lookYawVel: 26792n, // float32 m_lookYawVel; |  0x68a8 | Schema_Builtin | Size: 0x4
	m_targetSpot: 26796n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_targetSpotVelocity: 26808n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_targetSpotPredicted: 26820n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_aimError: 26832n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimGoal: 26844n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_targetSpotTime: 26856n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_aimFocus: 26860n, // float32 m_aimFocus; |  0x68ec | Schema_Builtin | Size: 0x4
	m_aimFocusInterval: 26864n, // float32 m_aimFocusInterval; |  0x68f0 | Schema_Builtin | Size: 0x4
	m_aimFocusNextUpdate: 26868n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_ignoreEnemiesTimer: 26880n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_enemy: 26904n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_isEnemyVisible: 26908n, // bool m_isEnemyVisible; |  0x691c | Schema_Builtin | Size: 0x1
	m_visibleEnemyParts: 26909n, // uint8_t m_visibleEnemyParts; |  0x691d | Schema_Builtin | Size: 0x1
	m_lastEnemyPosition: 26912n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastSawEnemyTimestamp: 26924n, // float32 m_lastSawEnemyTimestamp; |  0x692c | Schema_Builtin | Size: 0x4
	m_firstSawEnemyTimestamp: 26928n, // float32 m_firstSawEnemyTimestamp; |  0x6930 | Schema_Builtin | Size: 0x4
	m_currentEnemyAcquireTimestamp: 26932n, // float32 m_currentEnemyAcquireTimestamp; |  0x6934 | Schema_Builtin | Size: 0x4
	m_enemyDeathTimestamp: 26936n, // float32 m_enemyDeathTimestamp; |  0x6938 | Schema_Builtin | Size: 0x4
	m_friendDeathTimestamp: 26940n, // float32 m_friendDeathTimestamp; |  0x693c | Schema_Builtin | Size: 0x4
	m_isLastEnemyDead: 26944n, // bool m_isLastEnemyDead; |  0x6940 | Schema_Builtin | Size: 0x1
	m_nearbyEnemyCount: 26948n, // int32_t m_nearbyEnemyCount; |  0x6944 | Schema_Builtin | Size: 0x4
	m_bomber: 27472n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nearbyFriendCount: 27476n, // int32_t m_nearbyFriendCount; |  0x6b54 | Schema_Builtin | Size: 0x4
	m_closestVisibleFriend: 27480n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_closestVisibleHumanFriend: 27484n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_attentionInterval: 27488n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_attacker: 27504n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_attackedTimestamp: 27508n, // float32 m_attackedTimestamp; |  0x6b74 | Schema_Builtin | Size: 0x4
	m_burnedByFlamesTimer: 27512n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_lastVictimID: 27528n, // int32_t m_lastVictimID; |  0x6b88 | Schema_Builtin | Size: 0x4
	m_isAimingAtEnemy: 27532n, // bool m_isAimingAtEnemy; |  0x6b8c | Schema_Builtin | Size: 0x1
	m_isRapidFiring: 27533n, // bool m_isRapidFiring; |  0x6b8d | Schema_Builtin | Size: 0x1
	m_equipTimer: 27536n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_zoomTimer: 27552n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_fireWeaponTimestamp: 27576n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_lookForWeaponsOnGroundTimer: 27584n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bIsSleeping: 27608n, // bool m_bIsSleeping; |  0x6bd8 | Schema_Builtin | Size: 0x1
	m_isEnemySniperVisible: 27609n, // bool m_isEnemySniperVisible; |  0x6bd9 | Schema_Builtin | Size: 0x1
	m_sawEnemySniperTimer: 27616n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_enemyQueueIndex: 27800n, // uint8_t m_enemyQueueIndex; |  0x6c98 | Schema_Builtin | Size: 0x1
	m_enemyQueueCount: 27801n, // uint8_t m_enemyQueueCount; |  0x6c99 | Schema_Builtin | Size: 0x1
	m_enemyQueueAttendIndex: 27802n, // uint8_t m_enemyQueueAttendIndex; |  0x6c9a | Schema_Builtin | Size: 0x1
	m_isStuck: 27803n, // bool m_isStuck; |  0x6c9b | Schema_Builtin | Size: 0x1
	m_stuckTimestamp: 27804n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_stuckSpot: 27808n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_wiggleTimer: 27824n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_stuckJumpTimer: 27848n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_nextCleanupCheckTimestamp: 27872n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_avgVel: 27876n, // float32 m_avgVel[10]; |  0x6ce4 | Schema_FixedArray | Size: 0x28
	m_avgVelIndex: 27916n, // int32_t m_avgVelIndex; |  0x6d0c | Schema_Builtin | Size: 0x4
	m_avgVelCount: 27920n, // int32_t m_avgVelCount; |  0x6d10 | Schema_Builtin | Size: 0x4
	m_lastOrigin: 27924n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastRadioRecievedTimestamp: 27940n, // float32 m_lastRadioRecievedTimestamp; |  0x6d24 | Schema_Builtin | Size: 0x4
	m_lastRadioSentTimestamp: 27944n, // float32 m_lastRadioSentTimestamp; |  0x6d28 | Schema_Builtin | Size: 0x4
	m_radioSubject: 27948n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_radioPosition: 27952n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_voiceEndTimestamp: 27964n, // float32 m_voiceEndTimestamp; |  0x6d3c | Schema_Builtin | Size: 0x4
	m_lastValidReactionQueueFrame: 27976n, // int32_t m_lastValidReactionQueueFrame; |  0x6d48 | Schema_Builtin | Size: 0x4
}
