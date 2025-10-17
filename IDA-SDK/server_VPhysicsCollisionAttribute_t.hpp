#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_VPhysicsCollisionAttribute_t {
    char vTable4142[0x8];
    uint64_t m_nInteractsAs;
    uint64_t m_nInteractsWith;
    uint64_t m_nInteractsExclude;
    uint32_t m_nEntityId;
    uint32_t m_nOwnerId;
    uint16_t m_nHierarchyId;
    uint8_t m_nCollisionGroup;
    uint8_t m_nCollisionFunctionMask;
    char end_pad_4143[0x4];
};
