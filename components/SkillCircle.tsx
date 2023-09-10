type SkillItemProps = {
  skill: string;
  index: number;
  total: number;
};

const skills = ["React", "Vue", "Angular", "Svelte"];

function SkillItem({ skill, index, total }: SkillItemProps) {
  const angle = (360 / total) * index;
  const distance = 150;
  const radians = (angle * Math.PI) / 180;
  const x = Math.sin(radians) * distance;
  const y = -Math.cos(radians) * distance;

  // Get start and end points for the line to connect center and skill
  const startX = 0;
  const startY = 0;
  const endX = x;
  const endY = y;

  return (
    <>
      {/* Drawing the line */}
      <div
        className="absolute z-0 w-px bg-blue-500"
        style={{
          height: `${distance}px`,
          transform: `translate(${startX}px, ${startY}px) rotate(${angle}deg)`,
          transformOrigin: "0 100%",
        }}
      ></div>

      {/* Skill Item */}
      <div
        className="absolute z-10 transform rounded bg-red-500 px-4 py-2"
        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      >
        {skill}
      </div>
    </>
  );
}

export default function SkillDiagram() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      {/* Central Circle */}
      <div className="z-10 flex h-32 w-32 items-center justify-center rounded-full bg-blue-500">
        Center
      </div>

      {/* Skills */}
      {skills.map((skill, index) => (
        <SkillItem
          skill={skill}
          index={index}
          key={index}
          total={skills.length}
        />
      ))}
    </div>
  );
}
