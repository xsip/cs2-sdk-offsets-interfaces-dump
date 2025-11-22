// generated - do not edit!

import {server_CDynamicProp} from './CDynamicProp';
// Class size: 0x32A0
// BaseClass: : public CS2::server::CDynamicProp
export const server_CChicken  = {
	...server_CDynamicProp,
	m_AttributeManager: 3440n, // server::CAttributeContainer  | Schema_DeclaredClass | Size: 0x2f8
	m_updateTimer: 4200n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_stuckAnchor: 4224n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_stuckTimer: 4240n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_collisionStuckTimer: 4264n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isOnGround: 4288n, // bool m_isOnGround; |  0x10c0 | Schema_Builtin | Size: 0x1
	m_vFallVelocity: 4292n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_desiredActivity: 4304n, // server::ChickenActivity  | Schema_DeclaredEnum | Size: 0x4
	m_currentActivity: 4308n, // server::ChickenActivity  | Schema_DeclaredEnum | Size: 0x4
	m_activityTimer: 4312n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_turnRate: 4336n, // float32 m_turnRate; |  0x10f0 | Schema_Builtin | Size: 0x4
	m_fleeFrom: 4340n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_moveRateThrottleTimer: 4344n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_startleTimer: 4368n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_vocalizeTimer: 4392n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_flWhenZombified: 4416n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_jumpedThisFrame: 4420n, // bool m_jumpedThisFrame; |  0x1144 | Schema_Builtin | Size: 0x1
	m_leader: 4424n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_reuseTimer: 4448n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_hasBeenUsed: 4472n, // bool m_hasBeenUsed; |  0x1178 | Schema_Builtin | Size: 0x1
	m_jumpTimer: 4480n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_flLastJumpTime: 4504n, // float32 m_flLastJumpTime; |  0x1198 | Schema_Builtin | Size: 0x4
	m_bInJump: 4508n, // bool m_bInJump; |  0x119c | Schema_Builtin | Size: 0x1
	m_repathTimer: 12712n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_vecPathGoal: 12864n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flActiveFollowStartTime: 12876n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_followMinuteTimer: 12880n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_BlockDirectionTimer: 12912n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
