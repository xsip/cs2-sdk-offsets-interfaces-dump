// generated - do not edit!

// Class size: 0x48
// BaseClass: NONE
export const worldrenderer_BakedLightingInfo_t  = {
	m_nLightmapVersionNumber: 0n, // uint32_t m_nLightmapVersionNumber; |  0x0 | Schema_Builtin | Size: 0x4
	m_nLightmapGameVersionNumber: 4n, // uint32_t m_nLightmapGameVersionNumber; |  0x4 | Schema_Builtin | Size: 0x4
	m_vLightmapUvScale: 8n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_bHasLightmaps: 16n, // bool m_bHasLightmaps; |  0x10 | Schema_Builtin | Size: 0x1
	m_bBakedShadowsGamma20: 17n, // bool m_bBakedShadowsGamma20; |  0x11 | Schema_Builtin | Size: 0x1
	m_bCompressionEnabled: 18n, // bool m_bCompressionEnabled; |  0x12 | Schema_Builtin | Size: 0x1
	m_bSHLightmaps: 19n, // bool m_bSHLightmaps; |  0x13 | Schema_Builtin | Size: 0x1
	m_nChartPackIterations: 20n, // uint8_t m_nChartPackIterations; |  0x14 | Schema_Builtin | Size: 0x1
	m_nVradQuality: 21n, // uint8_t m_nVradQuality; |  0x15 | Schema_Builtin | Size: 0x1
	m_lightMaps: 24n, // GlobalTypes::CUtlVector<GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>>  | Schema_Atomic | Size: 0x18
	m_bakedShadows: 48n, // GlobalTypes::CUtlVector<worldrenderer::BakedLightingInfo_t::BakedShadowAssignment_t>  | Schema_Atomic | Size: 0x18
}
