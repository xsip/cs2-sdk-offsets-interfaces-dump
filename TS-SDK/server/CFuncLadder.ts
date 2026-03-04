// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x7C0
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncLadder  = {
	...server_CBaseModelEntity,
	m_vecLadderDir: 1840n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_Dismounts: 1856n, // server::CUtlVector<GlobalTypes::CHandle<server::CInfoLadderDismount>>  | Schema_Atomic | Size: 0x18
	m_vecLocalTop: 1880n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecPlayerMountPositionTop: 1892n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_vecPlayerMountPositionBottom: 1904n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_flAutoRideSpeed: 1916n, // float32 m_flAutoRideSpeed; |  0x77c | Schema_Builtin | Size: 0x4
	m_bDisabled: 1920n, // bool m_bDisabled; |  0x780 | Schema_Builtin | Size: 0x1
	m_bFakeLadder: 1921n, // bool m_bFakeLadder; |  0x781 | Schema_Builtin | Size: 0x1
	m_bHasSlack: 1922n, // bool m_bHasSlack; |  0x782 | Schema_Builtin | Size: 0x1
	m_surfacePropName: 1928n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnPlayerGotOnLadder: 1936n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnPlayerGotOffLadder: 1960n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
