// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x830
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CRopeKeyframe  = {
	...server_CBaseModelEntity,
	m_RopeFlags: 2016n, // uint16_t m_RopeFlags; |  0x7e0 | Schema_Builtin | Size: 0x2
	m_iNextLinkName: 2024n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_Slack: 2032n, // int16_t m_Slack; |  0x7f0 | Schema_Builtin | Size: 0x2
	m_Width: 2036n, // float32 m_Width; |  0x7f4 | Schema_Builtin | Size: 0x4
	m_TextureScale: 2040n, // float32 m_TextureScale; |  0x7f8 | Schema_Builtin | Size: 0x4
	m_nSegments: 2044n, // uint8_t m_nSegments; |  0x7fc | Schema_Builtin | Size: 0x1
	m_bConstrainBetweenEndpoints: 2045n, // bool m_bConstrainBetweenEndpoints; |  0x7fd | Schema_Builtin | Size: 0x1
	m_strRopeMaterialModel: 2048n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iRopeMaterialModelIndex: 2056n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_Subdiv: 2064n, // uint8_t m_Subdiv; |  0x810 | Schema_Builtin | Size: 0x1
	m_nChangeCount: 2065n, // uint8_t m_nChangeCount; |  0x811 | Schema_Builtin | Size: 0x1
	m_RopeLength: 2066n, // int16_t m_RopeLength; |  0x812 | Schema_Builtin | Size: 0x2
	m_fLockedPoints: 2068n, // uint8_t m_fLockedPoints; |  0x814 | Schema_Builtin | Size: 0x1
	m_bCreatedFromMapFile: 2069n, // bool m_bCreatedFromMapFile; |  0x815 | Schema_Builtin | Size: 0x1
	m_flScrollSpeed: 2072n, // float32 m_flScrollSpeed; |  0x818 | Schema_Builtin | Size: 0x4
	m_bStartPointValid: 2076n, // bool m_bStartPointValid; |  0x81c | Schema_Builtin | Size: 0x1
	m_bEndPointValid: 2077n, // bool m_bEndPointValid; |  0x81d | Schema_Builtin | Size: 0x1
	m_hStartPoint: 2080n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hEndPoint: 2084n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iStartAttachment: 2088n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_iEndAttachment: 2089n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
}
