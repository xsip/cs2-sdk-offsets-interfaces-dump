// generated - do not edit!

import {server_CBaseTrigger} from './CBaseTrigger';
// Class size: 0xA78
// BaseClass: : public CS2::server::CBaseTrigger
export const server_CTriggerLerpObject  = {
	...server_CBaseTrigger,
	m_iszLerpTarget: 2472n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hLerpTarget: 2480n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iszLerpTargetAttachment: 2488n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hLerpTargetAttachment: 2496n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_flLerpDuration: 2500n, // float32 m_flLerpDuration; |  0x9c4 | Schema_Builtin | Size: 0x4
	m_bLerpRestoreMoveType: 2504n, // bool m_bLerpRestoreMoveType; |  0x9c8 | Schema_Builtin | Size: 0x1
	m_bSingleLerpObject: 2505n, // bool m_bSingleLerpObject; |  0x9c9 | Schema_Builtin | Size: 0x1
	m_vecLerpingObjects: 2512n, // GlobalTypes::CUtlVector<server::lerpdata_t>  | Schema_Atomic | Size: 0x18
	m_iszLerpEffect: 2536n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszLerpSound: 2544n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bAttachTouchingObject: 2552n, // bool m_bAttachTouchingObject; |  0x9f8 | Schema_Builtin | Size: 0x1
	m_hEntityToWaitForDisconnect: 2556n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_OnLerpStarted: 2560n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnLerpFinished: 2600n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnDetached: 2640n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
