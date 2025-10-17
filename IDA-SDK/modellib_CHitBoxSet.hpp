#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CHitBoxSet {
    CUtlString m_name;
    uint32_t m_nNameHash;
    char pad_331[0x4];
    char m_HitBoxes[0x18];
    CUtlString m_SourceFilename;
};
