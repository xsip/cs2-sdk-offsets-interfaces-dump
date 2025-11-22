// generated - do not edit!

// Class size: 0x108
// BaseClass: NONE
export const modellib_CMaterialDrawDescriptor  = {
	m_flUvDensity: 0n, // float32 m_flUvDensity; |  0x0 | Schema_Builtin | Size: 0x4
	m_vTintColor: 4n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flAlpha: 16n, // float32 m_flAlpha; |  0x10 | Schema_Builtin | Size: 0x4
	m_nNumMeshlets: 22n, // uint16_t m_nNumMeshlets; |  0x16 | Schema_Builtin | Size: 0x2
	m_nFirstMeshlet: 28n, // uint32_t m_nFirstMeshlet; |  0x1c | Schema_Builtin | Size: 0x4
	m_nAppliedIndexOffset: 32n, // uint32_t m_nAppliedIndexOffset; |  0x20 | Schema_Builtin | Size: 0x4
	m_nDepthVertexBufferIndex: 36n, // uint8_t m_nDepthVertexBufferIndex; |  0x24 | Schema_Builtin | Size: 0x1
	m_nMeshletPackedIVBIndex: 37n, // uint8_t m_nMeshletPackedIVBIndex; |  0x25 | Schema_Builtin | Size: 0x1
	m_rigidMeshParts: 40n, // GlobalTypes::CUtlLeanVector<modellib::CMaterialDrawDescriptor::RigidMeshPart_t>  | Schema_Atomic | Size: 0x10
	m_nPrimitiveType: 56n, // modellib::RenderPrimitiveType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nBaseVertex: 60n, // int32_t m_nBaseVertex; |  0x3c | Schema_Builtin | Size: 0x4
	m_nVertexCount: 64n, // int32_t m_nVertexCount; |  0x40 | Schema_Builtin | Size: 0x4
	m_nStartIndex: 68n, // int32_t m_nStartIndex; |  0x44 | Schema_Builtin | Size: 0x4
	m_nIndexCount: 72n, // int32_t m_nIndexCount; |  0x48 | Schema_Builtin | Size: 0x4
	m_indexBuffer: 176n, // modellib::CRenderBufferBinding  | Schema_DeclaredClass | Size: 0x20
	m_meshletPackedIVB: 208n, // modellib::CRenderBufferBinding  | Schema_DeclaredClass | Size: 0x20
	m_material: 256n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
}
