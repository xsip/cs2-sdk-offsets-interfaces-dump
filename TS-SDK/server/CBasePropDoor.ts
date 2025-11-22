// generated - do not edit!

import {server_CDynamicProp} from './CDynamicProp';
// Class size: 0xFF0
// BaseClass: : public CS2::server::CDynamicProp
export const server_CBasePropDoor  = {
	...server_CDynamicProp,
	m_flAutoReturnDelay: 3424n, // float32 m_flAutoReturnDelay; |  0xd60 | Schema_Builtin | Size: 0x4
	m_hDoorList: 3432n, // server::CUtlVector<GlobalTypes::CHandle<server::CBasePropDoor>>  | Schema_Atomic | Size: 0x18
	m_nHardwareType: 3456n, // int32_t m_nHardwareType; |  0xd80 | Schema_Builtin | Size: 0x4
	m_bNeedsHardware: 3460n, // bool m_bNeedsHardware; |  0xd84 | Schema_Builtin | Size: 0x1
	m_eDoorState: 3464n, // client::DoorState_t  | Schema_DeclaredEnum | Size: 0x4
	m_bLocked: 3468n, // bool m_bLocked; |  0xd8c | Schema_Builtin | Size: 0x1
	m_bNoNPCs: 3469n, // bool m_bNoNPCs; |  0xd8d | Schema_Builtin | Size: 0x1
	m_closedPosition: 3472n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_closedAngles: 3484n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_hBlocker: 3496n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bFirstBlocked: 3500n, // bool m_bFirstBlocked; |  0xdac | Schema_Builtin | Size: 0x1
	m_ls: 3504n, // server::locksound_t  | Schema_DeclaredClass | Size: 0x20
	m_bForceClosed: 3536n, // bool m_bForceClosed; |  0xdd0 | Schema_Builtin | Size: 0x1
	m_vecLatchWorldPosition: 3540n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_hActivator: 3552n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_SoundMoving: 3576n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundOpen: 3584n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundClose: 3592n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundLock: 3600n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundUnlock: 3608n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundLatch: 3616n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundPound: 3624n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundJiggle: 3632n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_SoundLockedAnim: 3640n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_numCloseAttempts: 3648n, // int32_t m_numCloseAttempts; |  0xe40 | Schema_Builtin | Size: 0x4
	m_nPhysicsMaterial: 3652n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_SlaveName: 3656n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hMaster: 3664n, // GlobalTypes::CHandle<server::CBasePropDoor>  | Schema_Atomic | Size: 0x4
	m_OnBlockedClosing: 3672n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnBlockedOpening: 3712n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnUnblockedClosing: 3752n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnUnblockedOpening: 3792n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnFullyClosed: 3832n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnFullyOpen: 3872n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnClose: 3912n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnOpen: 3952n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnLockedUse: 3992n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnAjarOpen: 4032n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
