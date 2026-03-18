#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_CollisionDetailLayerInfo_t {
    CUtlString m_sDescription;
    CUtlString m_sFriendlyName;
    bool m_bIsQueryOnly;
    char pad_1321[0x7];
    CUtlString m_sParentDetailLayer;
    char m_vecSubtreeDetailLayers[0x18];
    bool m_bNotPickable;
    char end_pad_1322[0x7];
};
