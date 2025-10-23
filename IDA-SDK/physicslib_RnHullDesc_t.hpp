#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "physicslib_RnHull_t.hpp"

class physicslib_RnHullDesc_t {
    uint32_t m_nCollisionAttributeIndex;
    uint32_t m_nSurfacePropertyIndex;
    CUtlString m_UserFriendlyName;
    bool m_bUserFriendlyNameSealed;
    bool m_bUserFriendlyNameLong;
    char pad_2417[0x2];
    uint32_t m_nToolMaterialHash;
    physicslib_RnHull_t m_Hull;
};
