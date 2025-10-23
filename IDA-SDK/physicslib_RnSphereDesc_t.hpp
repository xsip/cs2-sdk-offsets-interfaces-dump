#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_RnSphereDesc_t {
    uint32_t m_nCollisionAttributeIndex;
    uint32_t m_nSurfacePropertyIndex;
    CUtlString m_UserFriendlyName;
    bool m_bUserFriendlyNameSealed;
    bool m_bUserFriendlyNameLong;
    char pad_2417[0x2];
    uint32_t m_nToolMaterialHash;
    char m_Sphere[0x10];
};
