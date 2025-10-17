#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_VPhysicsCollisionAttribute_t {
    char vTable1653[0x8];
    uint64_t m_nInteractsAs;
    uint64_t m_nInteractsWith;
    uint64_t m_nInteractsExclude;
    uint32_t m_nEntityId;
    uint32_t m_nOwnerId;
    uint16_t m_nHierarchyId;
    uint8_t m_nCollisionGroup;
    uint8_t m_nCollisionFunctionMask;
    char end_pad_1654[0x4];
};
