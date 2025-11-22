// generated - do not edit!

import {server_CHostageExpresserShim} from './CHostageExpresserShim';
// Class size: 0x2EB0
// BaseClass: : public CS2::server::CHostageExpresserShim
export const server_CHostage  = {
	...server_CHostageExpresserShim,
	m_OnHostageBeginGrab: 3080n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnFirstPickedUp: 3120n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnDroppedNotRescued: 3160n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnRescued: 3200n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_entitySpottedState: 3240n, // server::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_nSpotRules: 3264n, // int32_t m_nSpotRules; |  0xcc0 | Schema_Builtin | Size: 0x4
	m_uiHostageSpawnExclusionGroupMask: 3268n, // uint32_t m_uiHostageSpawnExclusionGroupMask; |  0xcc4 | Schema_Builtin | Size: 0x4
	m_nHostageSpawnRandomFactor: 3272n, // uint32_t m_nHostageSpawnRandomFactor; |  0xcc8 | Schema_Builtin | Size: 0x4
	m_bRemove: 3276n, // bool m_bRemove; |  0xccc | Schema_Builtin | Size: 0x1
	m_vel: 3280n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_isRescued: 3292n, // bool m_isRescued; |  0xcdc | Schema_Builtin | Size: 0x1
	m_jumpedThisFrame: 3293n, // bool m_jumpedThisFrame; |  0xcdd | Schema_Builtin | Size: 0x1
	m_nHostageState: 3296n, // int32_t m_nHostageState; |  0xce0 | Schema_Builtin | Size: 0x4
	m_leader: 3300n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_lastLeader: 3304n, // GlobalTypes::CHandle<server::CCSPlayerPawnBase>  | Schema_Atomic | Size: 0x4
	m_reuseTimer: 3312n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_hasBeenUsed: 3336n, // bool m_hasBeenUsed; |  0xd08 | Schema_Builtin | Size: 0x1
	m_accel: 3340n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_isRunning: 3352n, // bool m_isRunning; |  0xd18 | Schema_Builtin | Size: 0x1
	m_isCrouching: 3353n, // bool m_isCrouching; |  0xd19 | Schema_Builtin | Size: 0x1
	m_jumpTimer: 3360n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isWaitingForLeader: 3384n, // bool m_isWaitingForLeader; |  0xd38 | Schema_Builtin | Size: 0x1
	m_repathTimer: 11592n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_inhibitDoorTimer: 11616n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_inhibitObstacleAvoidanceTimer: 11760n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_wiggleTimer: 11792n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isAdjusted: 11820n, // bool m_isAdjusted; |  0x2e2c | Schema_Builtin | Size: 0x1
	m_bHandsHaveBeenCut: 11821n, // bool m_bHandsHaveBeenCut; |  0x2e2d | Schema_Builtin | Size: 0x1
	m_hHostageGrabber: 11824n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_fLastGrabTime: 11828n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecPositionWhenStartedDroppingToGround: 11832n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecGrabbedPos: 11844n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flRescueStartTime: 11856n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flGrabSuccessTime: 11860n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDropStartTime: 11864n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nApproachRewardPayouts: 11868n, // int32_t m_nApproachRewardPayouts; |  0x2e5c | Schema_Builtin | Size: 0x4
	m_nPickupEventCount: 11872n, // int32_t m_nPickupEventCount; |  0x2e60 | Schema_Builtin | Size: 0x4
	m_vecSpawnGroundPos: 11876n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecHostageResetPosition: 11932n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
}
