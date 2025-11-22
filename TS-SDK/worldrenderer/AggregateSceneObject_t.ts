// generated - do not edit!

// Class size: 0x78
// BaseClass: NONE
export const worldrenderer_AggregateSceneObject_t  = {
	m_allFlags: 0n, // worldrenderer::ObjectTypeFlags_t  | Schema_DeclaredEnum | Size: 0x4
	m_anyFlags: 4n, // worldrenderer::ObjectTypeFlags_t  | Schema_DeclaredEnum | Size: 0x4
	m_nLayer: 8n, // int16_t m_nLayer; |  0x8 | Schema_Builtin | Size: 0x2
	m_instanceStream: 10n, // int16_t m_instanceStream; |  0xa | Schema_Builtin | Size: 0x2
	m_vertexAlbedoStream: 12n, // int16_t m_vertexAlbedoStream; |  0xc | Schema_Builtin | Size: 0x2
	m_aggregateMeshes: 16n, // GlobalTypes::CUtlVector<worldrenderer::AggregateMeshInfo_t>  | Schema_Atomic | Size: 0x18
	m_lodSetups: 40n, // GlobalTypes::CUtlVector<worldrenderer::AggregateLODSetup_t>  | Schema_Atomic | Size: 0x18
	m_visClusterMembership: 64n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_fragmentTransforms: 88n, // GlobalTypes::CUtlVector<GlobalTypes::matrix3x4_t>  | Schema_Atomic | Size: 0x18
	m_renderableModel: 112n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCModel>  | Schema_Atomic | Size: 0x8
}
