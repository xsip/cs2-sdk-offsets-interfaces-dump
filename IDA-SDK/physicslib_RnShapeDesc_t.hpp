#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_RnShapeDesc_t {
    uint32_t m_nCollisionAttributeIndex;
    uint32_t m_nSurfacePropertyIndex;
    CUtlString m_UserFriendlyName;
    bool m_bUserFriendlyNameSealed;
    bool m_bUserFriendlyNameLong;
    char pad_2418[0x2];
    uint32_t m_nToolMaterialHash;
};
