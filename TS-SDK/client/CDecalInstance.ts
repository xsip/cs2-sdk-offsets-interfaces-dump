// generated - do not edit!

// Class size: 0xB0
// BaseClass: NONE
export const client_CDecalInstance  = {
	m_sDecalGroup: 0n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_hMaterial: 8n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_sSequenceName: 16n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_hEntity: 20n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_nBoneIndex: 24n, // int32_t m_nBoneIndex; |  0x18 | Schema_Builtin | Size: 0x4
	m_nTriangleIndex: 28n, // int32_t m_nTriangleIndex; |  0x1c | Schema_Builtin | Size: 0x4
	m_vPositionLS: 32n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vNormalLS: 44n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vSAxisLS: 56n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nFlags: 68n, // client::DecalFlags_t  | Schema_DeclaredEnum | Size: 0x4
	m_Color: 72n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flWidth: 76n, // float32 m_flWidth; |  0x4c | Schema_Builtin | Size: 0x4
	m_flHeight: 80n, // float32 m_flHeight; |  0x50 | Schema_Builtin | Size: 0x4
	m_flDepth: 84n, // float32 m_flDepth; |  0x54 | Schema_Builtin | Size: 0x4
	m_transform: 96n, // GlobalTypes::CTransformWS  | Schema_Atomic | Size: 0x20
	m_flAnimationScale: 128n, // float32 m_flAnimationScale; |  0x80 | Schema_Builtin | Size: 0x4
	m_flAnimationStartTime: 132n, // float32 m_flAnimationStartTime; |  0x84 | Schema_Builtin | Size: 0x4
	m_flPlaceTime: 136n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFadeStartTime: 140n, // float32 m_flFadeStartTime; |  0x8c | Schema_Builtin | Size: 0x4
	m_flFadeDuration: 144n, // float32 m_flFadeDuration; |  0x90 | Schema_Builtin | Size: 0x4
	m_flLightingOriginOffset: 148n, // float32 m_flLightingOriginOffset; |  0x94 | Schema_Builtin | Size: 0x4
	m_flBoundingRadiusSqr: 160n, // float32 m_flBoundingRadiusSqr; |  0xa0 | Schema_Builtin | Size: 0x4
	m_nSequenceIndex: 164n, // int16_t m_nSequenceIndex; |  0xa4 | Schema_Builtin | Size: 0x2
	m_bIsAdjacent: 166n, // bool m_bIsAdjacent; |  0xa6 | Schema_Builtin | Size: 0x1
	m_bDoDecalLightmapping: 167n, // bool m_bDoDecalLightmapping; |  0xa7 | Schema_Builtin | Size: 0x1
	m_nDecalRtEncoding: 168n, // client::DecalRtEncoding_t  | Schema_DeclaredEnum | Size: 0x1
	m_bProjectToBackfaces: 169n, // bool m_bProjectToBackfaces; |  0xa9 | Schema_Builtin | Size: 0x1
}
