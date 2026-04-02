// generated - do not edit!

import {server_CDynamicProp} from './CDynamicProp';
// Class size: 0xE50
// BaseClass: : public CS2::server::CDynamicProp
export const server_CBasePropDoor  = {
	...server_CDynamicProp,
	m_flAutoReturnDelay: 3168n, // float32 m_flAutoReturnDelay; |  0xc60 | Schema_Builtin | Size: 0x4
	m_hDoorList: 3176n, // GlobalTypes::CUtlVector<GlobalTypes::CHandle<server::CBasePropDoor>>  | Schema_Atomic | Size: 0x18
	m_nHardwareType: 3200n, // int32_t m_nHardwareType; |  0xc80 | Schema_Builtin | Size: 0x4
	m_bNeedsHardware: 3204n, // bool m_bNeedsHardware; |  0xc84 | Schema_Builtin | Size: 0x1
	m_eDoorState: 3208n, // client::DoorState_t  | Schema_DeclaredEnum | Size: 0x4
	m_bLocked: 3212n, // bool m_bLocked; |  0xc8c | Schema_Builtin | Size: 0x1
	m_bNoNPCs: 3213n, // bool m_bNoNPCs; |  0xc8d | Schema_Builtin | Size: 0x1
	m_closedPosition: 3216n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_closedAngles: 3228n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_hBlocker: 3240n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bFirstBlocked: 3244n, // bool m_bFirstBlocked; |  0xcac | Schema_Builtin | Size: 0x1
	m_ls: 3248n, // server::locksound_t  | Schema_DeclaredClass | Size: 0x20
	m_bForceClosed: 3280n, // bool m_bForceClosed; |  0xcd0 | Schema_Builtin | Size: 0x1
	m_vecLatchWorldPosition: 3284n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_hActivator: 3296n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_SoundMoving: 3320n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundOpen: 3328n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundClose: 3336n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundLock: 3344n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundUnlock: 3352n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundLatch: 3360n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundPound: 3368n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundJiggle: 3376n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundLockedAnim: 3384n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_numCloseAttempts: 3392n, // int32_t m_numCloseAttempts; |  0xd40 | Schema_Builtin | Size: 0x4
	m_nPhysicsMaterial: 3396n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_SlaveName: 3400n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hMaster: 3408n, // GlobalTypes::CHandle<server::CBasePropDoor>  | Schema_Atomic | Size: 0x4
	m_OnBlockedClosing: 3416n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnBlockedOpening: 3440n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnUnblockedClosing: 3464n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnUnblockedOpening: 3488n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnFullyClosed: 3512n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnFullyOpen: 3536n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnClose: 3560n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnOpen: 3584n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnLockedUse: 3608n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnAjarOpen: 3632n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
