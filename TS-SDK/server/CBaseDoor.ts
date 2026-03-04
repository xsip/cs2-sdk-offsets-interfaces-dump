// generated - do not edit!

import {server_CBaseToggle} from './CBaseToggle';
// Class size: 0x930
// BaseClass: : public CS2::server::CBaseToggle
export const server_CBaseDoor  = {
	...server_CBaseToggle,
	m_angMoveEntitySpace: 1984n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecMoveDirParentSpace: 1996n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_ls: 2008n, // server::locksound_t  | Schema_DeclaredClass | Size: 0x20
	m_bForceClosed: 2040n, // bool m_bForceClosed; |  0x7f8 | Schema_Builtin | Size: 0x1
	m_bDoorGroup: 2041n, // bool m_bDoorGroup; |  0x7f9 | Schema_Builtin | Size: 0x1
	m_bLocked: 2042n, // bool m_bLocked; |  0x7fa | Schema_Builtin | Size: 0x1
	m_bIgnoreDebris: 2043n, // bool m_bIgnoreDebris; |  0x7fb | Schema_Builtin | Size: 0x1
	m_bNoNPCs: 2044n, // bool m_bNoNPCs; |  0x7fc | Schema_Builtin | Size: 0x1
	m_eSpawnPosition: 2048n, // server::FuncDoorSpawnPos_t  | Schema_DeclaredEnum | Size: 0x4
	m_flBlockDamage: 2052n, // float32 m_flBlockDamage; |  0x804 | Schema_Builtin | Size: 0x4
	m_NoiseMoving: 2056n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_NoiseArrived: 2064n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_NoiseMovingClosed: 2072n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_NoiseArrivedClosed: 2080n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_ChainTarget: 2088n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnBlockedClosing: 2096n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnBlockedOpening: 2120n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnUnblockedClosing: 2144n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnUnblockedOpening: 2168n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnFullyClosed: 2192n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnFullyOpen: 2216n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnClose: 2240n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnOpen: 2264n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnLockedUse: 2288n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bLoopMoveSound: 2312n, // bool m_bLoopMoveSound; |  0x908 | Schema_Builtin | Size: 0x1
	m_bCreateNavObstacle: 2344n, // bool m_bCreateNavObstacle; |  0x928 | Schema_Builtin | Size: 0x1
	m_isChaining: 2345n, // bool m_isChaining; |  0x929 | Schema_Builtin | Size: 0x1
	m_bIsUsable: 2346n, // bool m_bIsUsable; |  0x92a | Schema_Builtin | Size: 0x1
}
