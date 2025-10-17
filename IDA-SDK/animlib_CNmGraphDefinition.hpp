#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmGraphDefinition {
    CGlobalSymbol m_variationID;
    char m_skeleton[0x8];
    char m_persistentNodeIndices[0x18];
    int16_t m_nRootNodeIdx;
    char pad_1747[0x6];
    char m_controlParameterIDs[0x18];
    char m_virtualParameterIDs[0x18];
    char m_virtualParameterNodeIndices[0x18];
    char m_referencedGraphSlots[0x18];
    char m_externalGraphSlots[0x18];
    char pad_1748[0x70];
    char m_nodePaths[0x18];
    char m_resources[0x18];
    char end_pad_1749[0x38];
};
