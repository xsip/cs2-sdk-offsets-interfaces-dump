// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x888
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncLadder  = {
	...server_CBaseModelEntity,
	m_vecLadderDir: 2008n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_Dismounts: 2024n, // server::CUtlVector<GlobalTypes::CHandle<server::CInfoLadderDismount>>  | Schema_Atomic | Size: 0x18
	m_vecLocalTop: 2048n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecPlayerMountPositionTop: 2060n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_vecPlayerMountPositionBottom: 2072n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_flAutoRideSpeed: 2084n, // float32 m_flAutoRideSpeed; |  0x824 | Schema_Builtin | Size: 0x4
	m_bDisabled: 2088n, // bool m_bDisabled; |  0x828 | Schema_Builtin | Size: 0x1
	m_bFakeLadder: 2089n, // bool m_bFakeLadder; |  0x829 | Schema_Builtin | Size: 0x1
	m_bHasSlack: 2090n, // bool m_bHasSlack; |  0x82a | Schema_Builtin | Size: 0x1
	m_surfacePropName: 2096n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnPlayerGotOnLadder: 2104n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnPlayerGotOffLadder: 2144n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
