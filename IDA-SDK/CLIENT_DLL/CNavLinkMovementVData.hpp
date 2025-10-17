#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CNavLinkMovementVData {
    char m_sToolsOnlyOwnerModelName[0xe0];
    bool m_bIsInterpolated;
    char pad_433[0x3];
    uint32_t m_unRecommendedDistance;
    char m_vecAnimgraphVars[0x18];
};
