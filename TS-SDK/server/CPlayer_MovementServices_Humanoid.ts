// generated - do not edit!

import {server_CPlayer_MovementServices} from './CPlayer_MovementServices';
// Class size: 0x280
// BaseClass: : public CS2::server::CPlayer_MovementServices
export const server_CPlayer_MovementServices_Humanoid  = {
	...server_CPlayer_MovementServices,
	m_flStepSoundTime: 568n, // float32 m_flStepSoundTime; |  0x238 | Schema_Builtin | Size: 0x4
	m_flFallVelocity: 572n, // float32 m_flFallVelocity; |  0x23c | Schema_Builtin | Size: 0x4
	m_bInCrouch: 576n, // bool m_bInCrouch; |  0x240 | Schema_Builtin | Size: 0x1
	m_nCrouchState: 580n, // uint32_t m_nCrouchState; |  0x244 | Schema_Builtin | Size: 0x4
	m_flCrouchTransitionStartTime: 584n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bDucked: 588n, // bool m_bDucked; |  0x24c | Schema_Builtin | Size: 0x1
	m_bDucking: 589n, // bool m_bDucking; |  0x24d | Schema_Builtin | Size: 0x1
	m_bInDuckJump: 590n, // bool m_bInDuckJump; |  0x24e | Schema_Builtin | Size: 0x1
	m_groundNormal: 592n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flSurfaceFriction: 604n, // float32 m_flSurfaceFriction; |  0x25c | Schema_Builtin | Size: 0x4
	m_surfaceProps: 608n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_nStepside: 624n, // int32_t m_nStepside; |  0x270 | Schema_Builtin | Size: 0x4
	m_vecSmoothedVelocity: 628n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
