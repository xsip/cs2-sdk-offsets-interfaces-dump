// generated - do not edit!

import {server_CHostageExpresserShim} from './CHostageExpresserShim';
// Class size: 0x2E00
// BaseClass: : public CS2::server::CHostageExpresserShim
export const server_CHostage  = {
	...server_CHostageExpresserShim,
	m_OnHostageBeginGrab: 2968n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnFirstPickedUp: 2992n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnDroppedNotRescued: 3016n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnRescued: 3040n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_entitySpottedState: 3064n, // server::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_nSpotRules: 3088n, // int32_t m_nSpotRules; |  0xc10 | Schema_Builtin | Size: 0x4
	m_uiHostageSpawnExclusionGroupMask: 3092n, // uint32_t m_uiHostageSpawnExclusionGroupMask; |  0xc14 | Schema_Builtin | Size: 0x4
	m_nHostageSpawnRandomFactor: 3096n, // uint32_t m_nHostageSpawnRandomFactor; |  0xc18 | Schema_Builtin | Size: 0x4
	m_bRemove: 3100n, // bool m_bRemove; |  0xc1c | Schema_Builtin | Size: 0x1
	m_vel: 3104n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_isRescued: 3116n, // bool m_isRescued; |  0xc2c | Schema_Builtin | Size: 0x1
	m_jumpedThisFrame: 3117n, // bool m_jumpedThisFrame; |  0xc2d | Schema_Builtin | Size: 0x1
	m_nHostageState: 3120n, // int32_t m_nHostageState; |  0xc30 | Schema_Builtin | Size: 0x4
	m_leader: 3124n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_lastLeader: 3128n, // GlobalTypes::CHandle<server::CCSPlayerPawnBase>  | Schema_Atomic | Size: 0x4
	m_reuseTimer: 3136n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_hasBeenUsed: 3160n, // bool m_hasBeenUsed; |  0xc58 | Schema_Builtin | Size: 0x1
	m_accel: 3164n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_isRunning: 3176n, // bool m_isRunning; |  0xc68 | Schema_Builtin | Size: 0x1
	m_isCrouching: 3177n, // bool m_isCrouching; |  0xc69 | Schema_Builtin | Size: 0x1
	m_jumpTimer: 3184n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isWaitingForLeader: 3208n, // bool m_isWaitingForLeader; |  0xc88 | Schema_Builtin | Size: 0x1
	m_repathTimer: 11416n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_inhibitDoorTimer: 11440n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_inhibitObstacleAvoidanceTimer: 11584n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_wiggleTimer: 11616n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isAdjusted: 11644n, // bool m_isAdjusted; |  0x2d7c | Schema_Builtin | Size: 0x1
	m_bHandsHaveBeenCut: 11645n, // bool m_bHandsHaveBeenCut; |  0x2d7d | Schema_Builtin | Size: 0x1
	m_hHostageGrabber: 11648n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_fLastGrabTime: 11652n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecPositionWhenStartedDroppingToGround: 11656n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecGrabbedPos: 11668n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flRescueStartTime: 11680n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flGrabSuccessTime: 11684n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDropStartTime: 11688n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nApproachRewardPayouts: 11692n, // int32_t m_nApproachRewardPayouts; |  0x2dac | Schema_Builtin | Size: 0x4
	m_nPickupEventCount: 11696n, // int32_t m_nPickupEventCount; |  0x2db0 | Schema_Builtin | Size: 0x4
	m_vecSpawnGroundPos: 11700n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecHostageResetPosition: 11756n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
}
