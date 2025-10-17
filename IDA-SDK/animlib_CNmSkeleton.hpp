#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmSkeleton {
    CGlobalSymbol m_ID;
    char m_boneIDs[0x10];
    char m_parentIndices[0x18];
    char m_parentSpaceReferencePose[0x18];
    char m_modelSpaceReferencePose[0x18];
    int32_t m_numBonesToSampleAtLowLOD;
    char pad_1763[0x24];
    char m_maskDefinitions[0x10];
    char pad_1764[0x10];
    char m_secondarySkeletons[0x10];
    bool m_bIsPropSkeleton;
    char end_pad_1765[0x7];
};
