#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "physicslib_RnMesh_t.hpp"

class physicslib_RnMeshDesc_t {
    uint32_t m_nCollisionAttributeIndex;
    uint32_t m_nSurfacePropertyIndex;
    CUtlString m_UserFriendlyName;
    bool m_bUserFriendlyNameSealed;
    bool m_bUserFriendlyNameLong;
    char pad_2417[0x2];
    uint32_t m_nToolMaterialHash;
    physicslib_RnMesh_t m_Mesh;
};
