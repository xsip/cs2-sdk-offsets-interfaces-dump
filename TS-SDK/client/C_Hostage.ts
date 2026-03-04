// generated - do not edit!

import {client_C_BaseCombatCharacter} from './C_BaseCombatCharacter';
// Class size: 0x14A8
// BaseClass: : public CS2::client::C_BaseCombatCharacter
export const client_C_Hostage  = {
	...client_C_BaseCombatCharacter,
	m_entitySpottedState: 5080n, // client::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_leader: 5104n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_reuseTimer: 5112n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_vel: 5136n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_isRescued: 5148n, // bool m_isRescued; |  0x141c | Schema_Builtin | Size: 0x1
	m_jumpedThisFrame: 5149n, // bool m_jumpedThisFrame; |  0x141d | Schema_Builtin | Size: 0x1
	m_nHostageState: 5152n, // int32_t m_nHostageState; |  0x1420 | Schema_Builtin | Size: 0x4
	m_bHandsHaveBeenCut: 5156n, // bool m_bHandsHaveBeenCut; |  0x1424 | Schema_Builtin | Size: 0x1
	m_hHostageGrabber: 5160n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_fLastGrabTime: 5164n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecGrabbedPos: 5168n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flRescueStartTime: 5180n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flGrabSuccessTime: 5184n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDropStartTime: 5188n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDeadOrRescuedTime: 5192n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_blinkTimer: 5200n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_lookAt: 5224n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lookAroundTimer: 5240n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isInit: 5264n, // bool m_isInit; |  0x1490 | Schema_Builtin | Size: 0x1
	m_eyeAttachment: 5265n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_chestAttachment: 5266n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_pPredictionOwner: 5272n, // client::CBasePlayerController**  | Schema_Ptr | Size: 0x8
	m_fNewestAlphaThinkTime: 5280n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
