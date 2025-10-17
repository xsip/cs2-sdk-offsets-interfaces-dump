#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CRopeOverlapHit {
    char m_hEntity[0x4];
    char pad_511[0x4];
    char m_vecOverlappingLinks[0x18];
};
