// generated - do not edit!

import {server_CBaseTrigger} from './CBaseTrigger';
// Class size: 0x930
// BaseClass: : public CS2::server::CBaseTrigger
export const server_CTriggerLerpObject  = {
	...server_CBaseTrigger,
	m_iszLerpTarget: 2192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hLerpTarget: 2200n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iszLerpTargetAttachment: 2208n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hLerpTargetAttachment: 2216n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_flLerpDuration: 2220n, // float32 m_flLerpDuration; |  0x8ac | Schema_Builtin | Size: 0x4
	m_bAttachedEntityWasParented: 2224n, // bool m_bAttachedEntityWasParented; |  0x8b0 | Schema_Builtin | Size: 0x1
	m_bLerpRestoreMoveType: 2225n, // bool m_bLerpRestoreMoveType; |  0x8b1 | Schema_Builtin | Size: 0x1
	m_bSingleLerpObject: 2226n, // bool m_bSingleLerpObject; |  0x8b2 | Schema_Builtin | Size: 0x1
	m_vecLerpingObjects: 2232n, // GlobalTypes::CUtlVector<server::lerpdata_t>  | Schema_Atomic | Size: 0x18
	m_iszLerpEffect: 2256n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszLerpSound: 2264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bAttachTouchingObject: 2272n, // bool m_bAttachTouchingObject; |  0x8e0 | Schema_Builtin | Size: 0x1
	m_hEntityToWaitForDisconnect: 2276n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_OnLerpStarted: 2280n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnLerpFinished: 2304n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnDetached: 2328n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
