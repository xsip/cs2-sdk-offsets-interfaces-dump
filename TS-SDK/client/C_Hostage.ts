// generated - do not edit!

import {client_C_BaseCombatCharacter} from './C_BaseCombatCharacter';
// Class size: 0x14C0
// BaseClass: : public CS2::client::C_BaseCombatCharacter
export const client_C_Hostage  = {
	...client_C_BaseCombatCharacter,
	m_entitySpottedState: 5104n, // client::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_leader: 5128n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_reuseTimer: 5136n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_vel: 5160n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_isRescued: 5172n, // bool m_isRescued; |  0x1434 | Schema_Builtin | Size: 0x1
	m_jumpedThisFrame: 5173n, // bool m_jumpedThisFrame; |  0x1435 | Schema_Builtin | Size: 0x1
	m_nHostageState: 5176n, // int32_t m_nHostageState; |  0x1438 | Schema_Builtin | Size: 0x4
	m_bHandsHaveBeenCut: 5180n, // bool m_bHandsHaveBeenCut; |  0x143c | Schema_Builtin | Size: 0x1
	m_hHostageGrabber: 5184n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_fLastGrabTime: 5188n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecGrabbedPos: 5192n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flRescueStartTime: 5204n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flGrabSuccessTime: 5208n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDropStartTime: 5212n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDeadOrRescuedTime: 5216n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_blinkTimer: 5224n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_lookAt: 5248n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lookAroundTimer: 5264n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isInit: 5288n, // bool m_isInit; |  0x14a8 | Schema_Builtin | Size: 0x1
	m_eyeAttachment: 5289n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_chestAttachment: 5290n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_pPredictionOwner: 5296n, // client::CBasePlayerController**  | Schema_Ptr | Size: 0x8
	m_fNewestAlphaThinkTime: 5304n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
