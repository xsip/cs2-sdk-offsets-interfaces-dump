#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class RagdollCreationParams_t {
    Vector m_vForce;
    int32_t m_nForceBone;
    bool m_bForceCurrentWorldTransform;
    bool m_bUseLRURetirement;
    char pad_1079[0x2];
    int32_t m_nHealthToGrant;
};
