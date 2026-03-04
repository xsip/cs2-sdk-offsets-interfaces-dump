// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x788
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CRopeKeyframe  = {
	...server_CBaseModelEntity,
	m_RopeFlags: 1848n, // uint16_t m_RopeFlags; |  0x738 | Schema_Builtin | Size: 0x2
	m_iNextLinkName: 1856n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_Slack: 1864n, // int16_t m_Slack; |  0x748 | Schema_Builtin | Size: 0x2
	m_Width: 1868n, // float32 m_Width; |  0x74c | Schema_Builtin | Size: 0x4
	m_TextureScale: 1872n, // float32 m_TextureScale; |  0x750 | Schema_Builtin | Size: 0x4
	m_nSegments: 1876n, // uint8_t m_nSegments; |  0x754 | Schema_Builtin | Size: 0x1
	m_bConstrainBetweenEndpoints: 1877n, // bool m_bConstrainBetweenEndpoints; |  0x755 | Schema_Builtin | Size: 0x1
	m_strRopeMaterialModel: 1880n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iRopeMaterialModelIndex: 1888n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_Subdiv: 1896n, // uint8_t m_Subdiv; |  0x768 | Schema_Builtin | Size: 0x1
	m_nChangeCount: 1897n, // uint8_t m_nChangeCount; |  0x769 | Schema_Builtin | Size: 0x1
	m_RopeLength: 1898n, // int16_t m_RopeLength; |  0x76a | Schema_Builtin | Size: 0x2
	m_fLockedPoints: 1900n, // uint8_t m_fLockedPoints; |  0x76c | Schema_Builtin | Size: 0x1
	m_bCreatedFromMapFile: 1901n, // bool m_bCreatedFromMapFile; |  0x76d | Schema_Builtin | Size: 0x1
	m_flScrollSpeed: 1904n, // float32 m_flScrollSpeed; |  0x770 | Schema_Builtin | Size: 0x4
	m_bStartPointValid: 1908n, // bool m_bStartPointValid; |  0x774 | Schema_Builtin | Size: 0x1
	m_bEndPointValid: 1909n, // bool m_bEndPointValid; |  0x775 | Schema_Builtin | Size: 0x1
	m_hStartPoint: 1912n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hEndPoint: 1916n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iStartAttachment: 1920n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_iEndAttachment: 1921n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
}
