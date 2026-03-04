// generated - do not edit!

import {server_CDynamicProp} from './CDynamicProp';
// Class size: 0x3190
// BaseClass: : public CS2::server::CDynamicProp
export const server_CChicken  = {
	...server_CDynamicProp,
	m_AttributeManager: 3184n, // server::CAttributeContainer  | Schema_DeclaredClass | Size: 0x2f8
	m_updateTimer: 3944n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_stuckAnchor: 3968n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_stuckTimer: 3984n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_collisionStuckTimer: 4008n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isOnGround: 4032n, // bool m_isOnGround; |  0xfc0 | Schema_Builtin | Size: 0x1
	m_vFallVelocity: 4036n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_desiredActivity: 4048n, // server::ChickenActivity  | Schema_DeclaredEnum | Size: 0x4
	m_currentActivity: 4052n, // server::ChickenActivity  | Schema_DeclaredEnum | Size: 0x4
	m_activityTimer: 4056n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_turnRate: 4080n, // float32 m_turnRate; |  0xff0 | Schema_Builtin | Size: 0x4
	m_fleeFrom: 4084n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_moveRateThrottleTimer: 4088n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_startleTimer: 4112n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_vocalizeTimer: 4136n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_flWhenZombified: 4160n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_jumpedThisFrame: 4164n, // bool m_jumpedThisFrame; |  0x1044 | Schema_Builtin | Size: 0x1
	m_leader: 4168n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_reuseTimer: 4192n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_hasBeenUsed: 4216n, // bool m_hasBeenUsed; |  0x1078 | Schema_Builtin | Size: 0x1
	m_jumpTimer: 4224n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_flLastJumpTime: 4248n, // float32 m_flLastJumpTime; |  0x1098 | Schema_Builtin | Size: 0x4
	m_bInJump: 4252n, // bool m_bInJump; |  0x109c | Schema_Builtin | Size: 0x1
	m_repathTimer: 12456n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_vecPathGoal: 12608n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flActiveFollowStartTime: 12620n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_followMinuteTimer: 12624n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_BlockDirectionTimer: 12656n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
