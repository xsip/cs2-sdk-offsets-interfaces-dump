#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_dynpitchvol_base_t {
    int32_t preset;
    int32_t pitchrun;
    int32_t pitchstart;
    int32_t spinup;
    int32_t spindown;
    int32_t volrun;
    int32_t volstart;
    int32_t fadein;
    int32_t fadeout;
    int32_t lfotype;
    int32_t lforate;
    int32_t lfomodpitch;
    int32_t lfomodvol;
    int32_t cspinup;
    int32_t cspincount;
    int32_t pitch;
    int32_t spinupsav;
    int32_t spindownsav;
    int32_t pitchfrac;
    int32_t vol;
    int32_t fadeinsav;
    int32_t fadeoutsav;
    int32_t volfrac;
    int32_t lfofrac;
    int32_t lfomult;
};
