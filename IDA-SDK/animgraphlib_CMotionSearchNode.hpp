#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CVectorQuantizer.hpp"

class animgraphlib_CMotionSearchNode {
    char m_children[0x18];
    animgraphlib_CVectorQuantizer m_quantizer;
    char m_sampleCodes[0x18];
    char m_sampleIndices[0x18];
    char m_selectableSamples[0x18];
};
