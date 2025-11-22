// generated - do not edit!

// Class size: 0x2C8
// BaseClass: NONE
export const modellib_PermModelData_t  = {
	m_name: 0n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_modelInfo: 8n, // modellib::PermModelInfo_t  | Schema_DeclaredClass | Size: 0x58
	m_ExtParts: 96n, // GlobalTypes::CUtlVector<modellib::PermModelExtPart_t>  | Schema_Atomic | Size: 0x18
	m_refMeshes: 120n, // GlobalTypes::CUtlVector<GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCRenderMesh>>  | Schema_Atomic | Size: 0x18
	m_refMeshGroupMasks: 144n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_refPhysGroupMasks: 168n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_refLODGroupMasks: 192n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_lodGroupSwitchDistances: 216n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_refPhysicsData: 240n, // GlobalTypes::CUtlVector<GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCPhysAggregateData>>  | Schema_Atomic | Size: 0x18
	m_refPhysicsHitboxData: 264n, // GlobalTypes::CUtlVector<GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCPhysAggregateData>>  | Schema_Atomic | Size: 0x18
	m_refAnimGroups: 288n, // GlobalTypes::CUtlVector<GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCAnimationGroup>>  | Schema_Atomic | Size: 0x18
	m_refSequenceGroups: 312n, // GlobalTypes::CUtlVector<GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCSequenceGroupData>>  | Schema_Atomic | Size: 0x18
	m_meshGroups: 336n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_materialGroups: 360n, // GlobalTypes::CUtlVector<modellib::MaterialGroup_t>  | Schema_Atomic | Size: 0x18
	m_nDefaultMeshGroupMask: 384n, // uint64_t m_nDefaultMeshGroupMask; |  0x180 | Schema_Builtin | Size: 0x8
	m_modelSkeleton: 392n, // modellib::ModelSkeletonData_t  | Schema_DeclaredClass | Size: 0xa8
	m_remappingTable: 560n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_remappingTableStarts: 584n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_boneFlexDrivers: 608n, // GlobalTypes::CUtlVector<modellib::ModelBoneFlexDriver_t>  | Schema_Atomic | Size: 0x18
	m_pModelConfigList: 632n, // modellib::CModelConfigList**  | Schema_Ptr | Size: 0x8
	m_BodyGroupsHiddenInTools: 640n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_refAnimIncludeModels: 664n, // GlobalTypes::CUtlVector<GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCModel>>  | Schema_Atomic | Size: 0x18
	m_AnimatedMaterialAttributes: 688n, // GlobalTypes::CUtlVector<modellib::PermModelDataAnimatedMaterialAttribute_t>  | Schema_Atomic | Size: 0x18
}
