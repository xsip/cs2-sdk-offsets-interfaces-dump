// generated - do not edit!

import {server_CBaseToggle} from './CBaseToggle';
// Class size: 0xA68
// BaseClass: : public CS2::server::CBaseToggle
export const server_CBaseDoor  = {
	...server_CBaseToggle,
	m_angMoveEntitySpace: 2152n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecMoveDirParentSpace: 2164n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_ls: 2176n, // server::locksound_t  | Schema_DeclaredClass | Size: 0x20
	m_bForceClosed: 2208n, // bool m_bForceClosed; |  0x8a0 | Schema_Builtin | Size: 0x1
	m_bDoorGroup: 2209n, // bool m_bDoorGroup; |  0x8a1 | Schema_Builtin | Size: 0x1
	m_bLocked: 2210n, // bool m_bLocked; |  0x8a2 | Schema_Builtin | Size: 0x1
	m_bIgnoreDebris: 2211n, // bool m_bIgnoreDebris; |  0x8a3 | Schema_Builtin | Size: 0x1
	m_bNoNPCs: 2212n, // bool m_bNoNPCs; |  0x8a4 | Schema_Builtin | Size: 0x1
	m_eSpawnPosition: 2216n, // server::FuncDoorSpawnPos_t  | Schema_DeclaredEnum | Size: 0x4
	m_flBlockDamage: 2220n, // float32 m_flBlockDamage; |  0x8ac | Schema_Builtin | Size: 0x4
	m_NoiseMoving: 2224n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_NoiseArrived: 2232n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_NoiseMovingClosed: 2240n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_NoiseArrivedClosed: 2248n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_ChainTarget: 2256n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnBlockedClosing: 2264n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnBlockedOpening: 2304n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnUnblockedClosing: 2344n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnUnblockedOpening: 2384n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnFullyClosed: 2424n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnFullyOpen: 2464n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnClose: 2504n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnOpen: 2544n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnLockedUse: 2584n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bLoopMoveSound: 2624n, // bool m_bLoopMoveSound; |  0xa40 | Schema_Builtin | Size: 0x1
	m_bCreateNavObstacle: 2656n, // bool m_bCreateNavObstacle; |  0xa60 | Schema_Builtin | Size: 0x1
	m_isChaining: 2657n, // bool m_isChaining; |  0xa61 | Schema_Builtin | Size: 0x1
	m_bIsUsable: 2658n, // bool m_bIsUsable; |  0xa62 | Schema_Builtin | Size: 0x1
}
