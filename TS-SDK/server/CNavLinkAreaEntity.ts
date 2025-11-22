// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x5C0
// BaseClass: : public CS2::server::CPointEntity
export const server_CNavLinkAreaEntity  = {
	...server_CPointEntity,
	m_flWidth: 1264n, // float32 m_flWidth; |  0x4f0 | Schema_Builtin | Size: 0x4
	m_vLocatorOffset: 1268n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_qLocatorAnglesOffset: 1280n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_strMovementForward: 1296n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_strMovementReverse: 1304n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bEnabled: 1360n, // bool m_bEnabled; |  0x550 | Schema_Builtin | Size: 0x1
	m_bAllowCrossMovableConnections: 1361n, // bool m_bAllowCrossMovableConnections; |  0x551 | Schema_Builtin | Size: 0x1
	m_strFilterName: 1368n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hFilter: 1376n, // GlobalTypes::CHandle<server::CBaseFilter>  | Schema_Atomic | Size: 0x4
	m_OnNavLinkStart: 1384n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnNavLinkFinish: 1424n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bIsTerminus: 1464n, // bool m_bIsTerminus; |  0x5b8 | Schema_Builtin | Size: 0x1
	m_nSplits: 1468n, // int32_t m_nSplits; |  0x5bc | Schema_Builtin | Size: 0x4
}
