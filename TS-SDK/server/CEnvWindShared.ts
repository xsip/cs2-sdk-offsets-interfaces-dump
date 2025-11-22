// generated - do not edit!

// Class size: 0x150
// BaseClass: NONE
export const server_CEnvWindShared  = {
	m_flStartTime: 8n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iWindSeed: 12n, // uint32_t m_iWindSeed; |  0xc | Schema_Builtin | Size: 0x4
	m_iMinWind: 16n, // uint16_t m_iMinWind; |  0x10 | Schema_Builtin | Size: 0x2
	m_iMaxWind: 18n, // uint16_t m_iMaxWind; |  0x12 | Schema_Builtin | Size: 0x2
	m_windRadius: 20n, // int32_t m_windRadius; |  0x14 | Schema_Builtin | Size: 0x4
	m_iMinGust: 24n, // uint16_t m_iMinGust; |  0x18 | Schema_Builtin | Size: 0x2
	m_iMaxGust: 26n, // uint16_t m_iMaxGust; |  0x1a | Schema_Builtin | Size: 0x2
	m_flMinGustDelay: 28n, // float32 m_flMinGustDelay; |  0x1c | Schema_Builtin | Size: 0x4
	m_flMaxGustDelay: 32n, // float32 m_flMaxGustDelay; |  0x20 | Schema_Builtin | Size: 0x4
	m_flGustDuration: 36n, // float32 m_flGustDuration; |  0x24 | Schema_Builtin | Size: 0x4
	m_iGustDirChange: 40n, // uint16_t m_iGustDirChange; |  0x28 | Schema_Builtin | Size: 0x2
	m_iInitialWindDir: 42n, // uint16_t m_iInitialWindDir; |  0x2a | Schema_Builtin | Size: 0x2
	m_flInitialWindSpeed: 44n, // float32 m_flInitialWindSpeed; |  0x2c | Schema_Builtin | Size: 0x4
	m_location: 48n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_OnGustStart: 64n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnGustEnd: 104n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_hEntOwner: 144n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
}
