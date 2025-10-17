#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class modellib_CModelConfigList;
#include "modellib_PermModelInfo_t.hpp"
#include "modellib_ModelSkeletonData_t.hpp"

class modellib_PermModelData_t {
    CUtlString m_name;
    modellib_PermModelInfo_t m_modelInfo;
    char m_ExtParts[0x18];
    char m_refMeshes[0x18];
    char m_refMeshGroupMasks[0x18];
    char m_refPhysGroupMasks[0x18];
    char m_refLODGroupMasks[0x18];
    char m_lodGroupSwitchDistances[0x18];
    char m_refPhysicsData[0x18];
    char m_refPhysicsHitboxData[0x18];
    char m_refAnimGroups[0x18];
    char m_refSequenceGroups[0x18];
    char m_meshGroups[0x18];
    char m_materialGroups[0x18];
    uint64_t m_nDefaultMeshGroupMask;
    modellib_ModelSkeletonData_t m_modelSkeleton;
    char m_remappingTable[0x18];
    char m_remappingTableStarts[0x18];
    char m_boneFlexDrivers[0x18];
    modellib_CModelConfigList* m_pModelConfigList;
    char m_BodyGroupsHiddenInTools[0x18];
    char m_refAnimIncludeModels[0x18];
    char m_AnimatedMaterialAttributes[0x18];
};
